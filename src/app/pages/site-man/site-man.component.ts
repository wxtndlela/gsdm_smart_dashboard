import { Component, OnInit } from "@angular/core";
import * as map_style from "../../../providers/map.styles";
import { BillboardComponent } from "../../shared/billboard/billboard.component";
import { Billboards } from "../../../services/db";
import { BillboardModal } from "../../../providers";
import { AddpolyModal } from "../../../providers/addpoly.modal";
import { Poly } from "../../../services/db/db.addpoly";
import {
  PopoverController,
  ModalController,
  AlertController,
  NavController,
  LoadingController,
} from "@ionic/angular";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryDocumentSnapshot,
} from "@angular/fire/firestore";
import "fabric";
import { firestore } from "firebase";
declare const fabric: any;

@Component({
  selector: "app-site-man",
  templateUrl: "./site-man.component.html",
  styleUrls: ["./site-man.component.scss"],
})
export class SiteManComponent implements OnInit {
  map: google.maps.Map;
  Billboard: any;
  Markers: any[] = [];
  content_url: any;

  //POLYGON DATAS
  myCanvas: any;
  image = new Image();
  url: string;
  isCanvasDrawn: boolean = true;
  canvas: any;
  polygon: any;
  isImageDrawn: boolean = false;
  isPolygonDrawn: boolean = false;
  points = [];
  newPt: any;
  item_id: any;
  item_name: any;
  currItem_id: any;
  PolyPoints: any;
  private dbPath = "/polygons";
  currID: any;
  Persons: any;
  Vehicles: any;

  constructor(
    private modalController: ModalController,
    private db: Billboards,
    private db_poly: Poly,

    private db_fs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.load_map();
    //POLYGON INIT
    this.canvas = new fabric.Canvas("canvasID", { fireRightClick: true });
    this.polygon = new fabric.Polygon(this.points, {
      left: 0,
      top: 0,
      fill: "rgba(255,0,0,0.1)",
      strokeWidth: 2,
      stroke: "lightgrey",
      scaleX: 1,
      scaleY: 1,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: "blue",
    });
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];

    this.db.Billboards.subscribe((val) => {
      this.Billboard = val;
      this.processIntr();
      //console.log('Billboards', this.Billboard);
    });
  }

  async processIntr() {
    let pips = await this.getIntr("Person");
    this.Persons = pips.length;
    let vevs = await this.getIntr("Vehicle");
    this.Vehicles = vevs.length;
  }

  public display_cont(url, item_id, item_name, type) {
    this.currItem_id = item_id;

    //alert(this.currItem_id);

    this.item_name = item_name;
    this.refreshPoly_2();
    var canvas = this.canvas;
    //this.content_url = url
    this.url = url;
    this.canvas.setHeight(500);
    this.canvas.setWidth(700);
    fabric.Image.fromURL(this.url, function (img) {
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height,
      });
    });

    this.isImageDrawn = true;

    if (type != "clear") {
      this.db_poly.Poly.subscribe((val) => {
        this.PolyPoints = val;
        //console.log(val);
        if (this.PolyPoints.length > 0) {
          //console.log(this.PolyPoints[0]['aX'])
          this.drawPoly(
            this.PolyPoints[0]["aX"],
            this.PolyPoints[0]["aY"],
            this.PolyPoints[0]["bX"],
            this.PolyPoints[0]["bY"],
            this.PolyPoints[0]["cX"],
            this.PolyPoints[0]["cY"],
            this.PolyPoints[0]["dX"],
            this.PolyPoints[0]["dY"]
          );
        }
      });
      this.db_poly.getPoly(item_id);
    } else {
      this.newPt = [];
    }
  }

  /**
   * set_styles
   */
  public set_map_styles() {
    //Associate the styled map with the MapTypeId and set it to display.
    this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
    this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
    this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
  }

  /**
   * change_style
   */
  public change_style(mapStyle) {
    this.map.setMapTypeId(mapStyle);
  }

  async presentConfirm(item) {
    this.alertCtrl
      .create({
        header: "Confirm Action",
        subHeader: "Delete MDP",
        message: "Are you sure you want to delete this item?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
          {
            text: "Delete",
            handler: () => {
              this.db.delete(item.id);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  async add_billboard() {
    const modal = await this.modalController.create({
      component: BillboardComponent,
      cssClass: "modal-full",
      componentProps: {
        title: "Add MDP",
      },
    });

    await modal.present();
  }

  async edit_billboard(data) {
    console.log(data);
    const modal = await this.modalController.create({
      component: BillboardComponent,
      cssClass: "modal-full",
      componentProps: {
        title: "Edit Area",
        data: data,
        data_id: data.id,
      },
    });

    await modal.present();
  }

  //POLYGON
  ngAfterViewInit(): void {
    this.canvas.on("mouse:up", (options) => {
      //alert(options.button)
      if (options.button === 1) {
        this.getClickCoords(options.e);
      }
    });

    this.canvas.on("mouse:down", (event) => {
      if (event.button === 3) {
        if (this.points.length < 4) {
          this.isPolygonDrawn = false;
        } else {
          //alert('Done')
          this.makePolygon();
          this.isPolygonDrawn = true;
        }
      }
    });
  }

  pointsAreReady() {
    if (this.points.length == 4) {
      this.makePolygon();
      this.isPolygonDrawn = true;
      this.Edit();
    }
  }

  // capture mouse clicks and add to points array
  getClickCoords(event: any) {
    if (this.isCanvasDrawn && this.isImageDrawn) {
      this.newPt = {
        x: event.layerX,
        y: event.layerY,
      };
      // alert(event.layerX)
      // alert(event.layerY)
      this.points.push(this.newPt);
      this.canvas.add(this.polygon); //Draws the actual polygon
    }
  }

  drawPoly(aX, aY, bX, bY, cX, cY, dX, dY) {
    this.newPt = [];
    this.newPt = {
      //A
      x: aX,
      y: aY,
    };
    this.points.push(this.newPt);
    this.newPt = {
      //B
      x: bX,
      y: bY,
    };
    this.points.push(this.newPt);
    this.newPt = {
      //C
      x: cX,
      y: cY,
    };
    this.points.push(this.newPt);
    this.newPt = {
      //D
      x: dX,
      y: dY,
    };
    this.points.push(this.newPt);
    this.canvas.add(this.polygon); //Draws the actual polygon
  }

  async savePoly() {
    const loading = await this.loadingCtrl.create({
      message: "please wait ...",
    });

    //alert(this.currItem_id)

    loading.present();

    let polys = await this.getPoly(this.currItem_id);
    this.db_fs.doc(`polygons/${polys[0]["id"]}`).delete();

    let addpoly: AddpolyModal = {
      id: "",
      item_id: this.currItem_id,
      item_name: this.item_name,
      aX: this.points[0].x,
      aY: this.points[0].y,
      bX: this.points[1].x,
      bY: this.points[1].y,
      cX: this.points[2].x,
      cY: this.points[2].y,
      dX: this.points[3].x,
      dY: this.points[3].y,
    };

    console.log("addpoly", addpoly);

    await this.db_poly.create(addpoly);
    loading.dismiss();
    //this.db.getAll();
    this.dismiss();
  }

  getIntr(type) {
    let dbPath = "/intrusions";
    return new Promise<any>((resolve) => {
      this.db_fs
        .collection(dbPath, (ref) => ref.where("type", "==", type))
        .valueChanges()
        .subscribe((poly) => resolve(poly));
    });
  }

  getPoly(item_id) {
    let dbPath = "/polygons";
    return new Promise<any>((resolve) => {
      this.db_fs
        .collection(dbPath, (ref) => ref.where("item_id", "==", item_id))
        .valueChanges()
        .subscribe((poly) => resolve(poly));
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  //confirm polygon drawing
  makePolygon() {
    this.isImageDrawn = false; //Stops the polygon from accepting more points/clicks
    console.log(this.points);
  }

  // normalise the coordinates of polygon and copy to clipboard
  copyCoords() {
    if (this.points.length >= 3) {
      let polygonStr = "Coords Array (";
      let close = ")";
      let sp = " ";
      let com = ", ";
      for (let i = 0; i < this.points.length - 1; i++) {
        let tempX = (this.points[i].x / 700).toFixed(10);
        let tempY = (this.points[i].y / 500).toFixed(10);
        tempX = tempX.toString();
        tempY = tempY.toString();
        polygonStr = polygonStr.concat(tempX, sp, tempY, com);
      }
      let last = this.points[this.points.length - 1];
      let tempX = (last.x / 700).toFixed(10);
      let tempY = (last.y / 500).toFixed(10);
      tempX = tempX.toString();
      tempY = tempY.toString();
      polygonStr = polygonStr.concat(tempX, sp, tempY, close);
      console.log(polygonStr);
      //alert('Restricted Area Saved and ready for Intrusion Detection!')
      //Copying Polygon to clipboard
      // let el = document.createElement('textarea');
      // el.value = polygonStr;
      //alert(polygonStr);
      // document.body.appendChild(el);
      // el.select();
      // document.execCommand('copy');
      // document.body.removeChild(el);
    }
  }

  public reset() {
    this.points = [];
    this.refreshPoly();
    this.isImageDrawn = true;
    //this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
    //this.canvas.remove(this.polygon);
    //this.points = [];
  }

  // polygon EDIT function (from documentation)
  public Edit() {
    function polygonPositionHandler(dim, finalMatrix, fabricObject) {
      let x =
          fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x,
        y = fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y;
      return fabric.util.transformPoint(
        new fabric.Point(x, y),
        fabric.util.multiplyTransformMatrices(
          fabricObject.canvas.viewportTransform,
          fabricObject.calcTransformMatrix()
        )
      );
    }
    function anchorWrapper(anchorIndex, fn) {
      return function (eventData, transform, x, y) {
        var fabricObject = transform.target,
          absolutePoint = fabric.util.transformPoint(
            new fabric.Point(
              fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x,
              fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y
            ),
            fabricObject.calcTransformMatrix()
          ),
          actionPerformed = fn(eventData, transform, x, y),
          newDim = fabricObject._setPositionDimensions({}),
          polygonBaseSize = fabricObject._getNonTransformedDimensions(),
          newX =
            (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) /
            polygonBaseSize.x,
          newY =
            (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) /
            polygonBaseSize.y;
        fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
        return actionPerformed;
      };
    }
    function actionHandler(eventData, transform, x, y) {
      var polygon = transform.target,
        currentControl = polygon.controls[polygon.__corner],
        mouseLocalPosition = polygon.toLocalPoint(
          new fabric.Point(x, y),
          "center",
          "center"
        ),
        polygonBaseSize = polygon._getNonTransformedDimensions(),
        size = polygon._getTransformedDimensions(0, 0),
        finalPointPosition = {
          x:
            (mouseLocalPosition.x * polygonBaseSize.x) / size.x +
            polygon.pathOffset.x,
          y:
            (mouseLocalPosition.y * polygonBaseSize.y) / size.y +
            polygon.pathOffset.y,
        };
      polygon.points[currentControl.pointIndex] = finalPointPosition;
      return true;
    }
    let poly = this.canvas.getObjects()[0];
    this.canvas.setActiveObject(poly);
    poly.edit = !poly.edit;
    if (poly.edit) {
      let lastControl = poly.points.length - 1;
      poly.cornerStyle = "circle";
      poly.cornerColor = "rgba(0,0,255,0.5)";
      poly.controls = poly.points.reduce(function (acc, point, index) {
        acc["p" + index] = new fabric["Control"]({
          pointIndex: index,
          positionHandler: polygonPositionHandler,
          actionHandler: anchorWrapper(
            index > 0 ? index - 1 : lastControl,
            actionHandler
          ),
          actionName: "modifyPolygon",
        });
        return acc;
      }, {});
    }

    poly.hasBorders = !poly.edit;
    this.canvas.requestRenderAll();
  }

  public refreshPoly_2() {
    this.points = [];
    this.isImageDrawn = true;
    this.isPolygonDrawn = false;
    this.polygon = new fabric.Polygon(this.points, {
      left: 0,
      top: 0,
      fill: "rgba(255,0,0,0.1)",
      strokeWidth: 2,
      stroke: "lightgrey",
      scaleX: 1,
      scaleY: 1,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: "blue",
    });
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
    this.canvas.clear(true);
  }

  public test() {
    //0.2785714286 0.1260000000, 0.1871428571 0.2400000000, 0.2485714286 0.3780000000, 0.3228571429 0.2580000000

    var tst = [
      { x: 300, y: 300 },
      { x: 600, y: 600 },
      { x: 300, y: 300 },
    ];

    //alert(this.points)
    for (let i = 0; i < this.points.length; i++) {
      this.points.push(tst[i]);
      //this.drawPoly(this.points[i]);
    }
  }

  // public drawPoly(coords){
  //   //this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });

  //   this.canvas.add(this.polygon);
  // }

  public refreshPoly() {
    //alert(this.currItem_id)
    this.points = [];
    this.isImageDrawn = true;
    this.isPolygonDrawn = false;
    this.polygon = new fabric.Polygon(this.points, {
      left: 0,
      top: 0,
      fill: "rgba(255,0,0,0.1)",
      strokeWidth: 2,
      stroke: "lightgrey",
      scaleX: 1,
      scaleY: 1,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: "blue",
    });
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
    this.canvas.clear(true);
    this.display_cont(this.url, this.currItem_id, this.item_name, "clear");
  }

  /**
   * load_map
   */
  public async load_map() {
    this.map = new google.maps.Map(
      document.getElementById("map_canvas_locations"),
      {
        center: { lat: -25.8783085, lng: 28.0247615 },
        zoom: 9,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: true,

        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },

        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },

        fullscreenControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_RIGHT,
        },
      }
    );

    this.set_map_styles();
    //DarkMap by default
    this.map.setMapTypeId("DarkMap");
  }
}
