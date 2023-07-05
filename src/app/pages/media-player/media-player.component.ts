import { Component, OnInit, ViewChild } from '@angular/core';
import { Billboards } from '../../../services/db';
import { SelectValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  //public content_url: any = 'https://firebasestorage.googleapis.com/v0/b/sitelive-905d1.appspot.com/o/sitelive%2Fcontent%2F0c5af084-4e1c-4542-bd3f-2aefafbb2ef2?alt=media&token=50f07473-09dd-4bbc-b66f-f35584c294d8'
  Billboard: any;

  public content_url: any;
  constructor(
    private db: Billboards,
  ) { }

  ngOnInit(): void {

    this.db.Billboards.subscribe(val => {
      this.Billboard = val;
      //console.log('Billboards', this.Billboard);

    })
  }

  startPlayer(url){
    //console.log(url);
    this.content_url = url;
  }

}
