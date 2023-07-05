export interface BillboardModal {
    user_id: string,
    billboard_id:string,
    name: string

    province: string,
    city: string,
    surburb: string,
    postalCode: string,

    date_created: string,
    date_modified: string,

    latitude: number,
    longitude: number,

    orientation: string,
    peak_rate: Number,
    offpeak_rate: Number,
    special_rate: Number,
    screen_width: Number,
    screen_height: Number,
    photo_url: string,

    mdptype: string,
    mdplocation: string,
    content_url: string,
    schedule_id: string,
    calltoaction: string
}

export interface BillboardModalEdit {
    billboard_id:string,
    name: string

    province: string,
    city: string,
    surburb: string,
    postalCode: string,

    date_created: string,
    date_modified: string,

    latitude: number,
    longitude: number,

    orientation: string,
    peak_rate: Number,
    offpeak_rate: Number,
    special_rate: Number,
    screen_width: Number,
    screen_height: Number,

    mdptype: string,
    mdplocation: string,
    content_url: string,
    schedule_id: string,
    calltoaction: string
}