
export interface Place {
  id?: number,
  name: string,
  location: string,
  fsqid: string,
  icon: string
}

export interface Collection {
  id?: number,
  name: string,
  description: string,
  places?: Place[]
}

export declare namespace FourSquareSearchResponse {

  export interface Meta {
    code: number;
    requestId: string;
  }

  export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
  }

  export interface Location {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    postalCode: string;
    cc: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: string[];
  }

  export interface Icon {
    prefix: string;
    suffix: string;
  }

  export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
  }

  export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
    referralId: string;
    hasPerk: boolean;
  }

  export interface Center {
    lat: number;
    lng: number;
  }

  export interface Ne {
    lat: number;
    lng: number;
  }

  export interface Sw {
    lat: number;
    lng: number;
  }

  export interface Bounds {
    ne: Ne;
    sw: Sw;
  }

  export interface Geometry {
    center: Center;
    bounds: Bounds;
  }

  export interface Feature {
    cc: string;
    name: string;
    displayName: string;
    matchedName: string;
    highlightedName: string;
    woeType: number;
    slug: string;
    id: string;
    longId: string;
    geometry: Geometry;
  }

  export interface Geocode {
    what: string;
    where: string;
    feature: Feature;
    parents: any[];
  }

  export interface Response {
    venues: Venue[];
    geocode: Geocode;
  }

  export interface RootObject {
    meta: Meta;
    response: Response;
  }

}

export declare module FourSquareVenueResponse {

  export interface Meta {
    code: number;
    requestId: string;
  }

  export interface Contact {
    phone: string;
    formattedPhone: string;
    facebook: string;
    facebookUsername: string;
    facebookName: string;
  }

  export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
  }

  export interface Location {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    postalCode: string;
    cc: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: string[];
  }

  export interface Icon {
    prefix: string;
    suffix: string;
  }

  export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
  }

  export interface Stats {
    tipCount: number;
  }

  export interface Price {
    tier: number;
    message: string;
    currency: string;
  }

  export interface Group {
    type: string;
    count: number;
    items: any[];
  }

  export interface Likes {
    count: number;
    groups: Group[];
    summary: string;
  }

  export interface BeenHere {
    count: number;
    unconfirmedCount: number;
    marked: boolean;
    lastCheckinExpiredAt: number;
  }

  export interface Specials {
    count: number;
    items: any[];
  }

  export interface Source {
    name: string;
    url: string;
  }

  export interface Photo {
    prefix: string;
    suffix: string;
  }

  export interface User {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo;
  }

  export interface Item {
    id: string;
    createdAt: number;
    source: Source;
    prefix: string;
    suffix: string;
    width: number;
    height: number;
    user: User;
    visibility: string;
  }

  export interface Group2 {
    type: string;
    name: string;
    count: number;
    items: Item[];
  }

  export interface Photos {
    count: number;
    groups: Group2[];
    summary: string;
  }

  export interface Item2 {
    summary: string;
    type: string;
    reasonName: string;
  }

  export interface Reasons {
    count: number;
    items: Item2[];
  }

  export interface HereNow {
    count: number;
    summary: string;
    groups: any[];
  }

  export interface Photo2 {
    prefix: string;
    suffix: string;
  }

  export interface Item4 {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo2;
  }

  export interface Group4 {
    type: string;
    count: number;
    items: Item4[];
  }

  export interface Likes2 {
    count: number;
    groups: Group4[];
    summary: string;
  }

  export interface Todo {
    count: number;
  }

  export interface Photo3 {
    prefix: string;
    suffix: string;
  }

  export interface User2 {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo3;
  }

  export interface Item3 {
    id: string;
    createdAt: number;
    text: string;
    type: string;
    canonicalUrl: string;
    likes: Likes2;
    logView: boolean;
    agreeCount: number;
    disagreeCount: number;
    todo: Todo;
    user: User2;
    authorInteractionType: string;
  }

  export interface Group3 {
    type: string;
    name: string;
    count: number;
    items: Item3[];
  }

  export interface Tips {
    count: number;
    groups: Group3[];
  }

  export interface Photo4 {
    prefix: string;
    suffix: string;
  }

  export interface User3 {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo4;
  }

  export interface Followers {
    count: number;
  }

  export interface Photo6 {
    prefix: string;
    suffix: string;
  }

  export interface User4 {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo6;
  }

  export interface Photo5 {
    id: string;
    createdAt: number;
    prefix: string;
    suffix: string;
    width: number;
    height: number;
    user: User4;
    visibility: string;
  }

  export interface Item6 {
    id: string;
    createdAt: number;
    photo: Photo5;
  }

  export interface ListItems {
    count: number;
    items: Item6[];
  }

  export interface Photo8 {
    prefix: string;
    suffix: string;
  }

  export interface User5 {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    photo: Photo8;
  }

  export interface Photo7 {
    id: string;
    createdAt: number;
    prefix: string;
    suffix: string;
    width: number;
    height: number;
    user: User5;
    visibility: string;
  }

  export interface Item5 {
    id: string;
    name: string;
    description: string;
    type: string;
    user: User3;
    editable: boolean;
    public: boolean;
    collaborative: boolean;
    url: string;
    canonicalUrl: string;
    createdAt: number;
    updatedAt: number;
    followers: Followers;
    listItems: ListItems;
    photo: Photo7;
  }

  export interface Group5 {
    type: string;
    name: string;
    count: number;
    items: Item5[];
  }

  export interface Listed {
    count: number;
    groups: Group5[];
  }

  export interface RichStatus {
    entities: any[];
    text: string;
  }

  export interface Open {
    renderedTime: string;
  }

  export interface Timeframe {
    days: string;
    includesToday: boolean;
    open: Open[];
    segments: any[];
  }

  export interface Hours {
    status: string;
    richStatus: RichStatus;
    isOpen: boolean;
    isLocalHoliday: boolean;
    dayData: any[];
    timeframes: Timeframe[];
  }

  export interface RichStatus2 {
    entities: any[];
    text: string;
  }

  export interface Open2 {
    renderedTime: string;
  }

  export interface Timeframe2 {
    days: string;
    includesToday: boolean;
    open: Open2[];
    segments: any[];
  }

  export interface Popular {
    status: string;
    richStatus: RichStatus2;
    isOpen: boolean;
    isLocalHoliday: boolean;
    timeframes: Timeframe2[];
  }

  export interface PageUpdates {
    count: number;
    items: any[];
  }

  export interface Inbox {
    count: number;
    items: any[];
  }

  export interface Item7 {
    displayName: string;
    displayValue: string;
    priceTier: number;
  }

  export interface Group6 {
    type: string;
    name: string;
    summary: string;
    count: number;
    items: Item7[];
  }

  export interface Attributes {
    groups: Group6[];
  }

  export interface Source2 {
    name: string;
    url: string;
  }

  export interface BestPhoto {
    id: string;
    createdAt: number;
    source: Source2;
    prefix: string;
    suffix: string;
    width: number;
    height: number;
    visibility: string;
  }

  export interface HighlightColor {
    photoId: string;
    value: number;
  }

  export interface HighlightTextColor {
    photoId: string;
    value: number;
  }

  export interface Colors {
    highlightColor: HighlightColor;
    highlightTextColor: HighlightTextColor;
    algoVersion: number;
  }

  export interface Venue {
    id: string;
    name: string;
    contact: Contact;
    location: Location;
    canonicalUrl: string;
    categories: Category[];
    verified: boolean;
    stats: Stats;
    url: string;
    price: Price;
    likes: Likes;
    dislike: boolean;
    ok: boolean;
    rating: number;
    ratingColor: string;
    ratingSignals: number;
    allowMenuUrlEdit: boolean;
    beenHere: BeenHere;
    specials: Specials;
    photos: Photos;
    reasons: Reasons;
    hereNow: HereNow;
    createdAt: number;
    tips: Tips;
    shortUrl: string;
    timeZone: string;
    listed: Listed;
    hours: Hours;
    popular: Popular;
    pageUpdates: PageUpdates;
    inbox: Inbox;
    attributes: Attributes;
    bestPhoto: BestPhoto;
    colors: Colors;
  }

  export interface Response {
    venue: Venue;
  }

  export interface RootObject {
    meta: Meta;
    response: Response;
  }

}

export declare module FourSquareExploreResponse {

  export interface Meta {
    code: number;
    requestId: string;
  }

  export interface Filter {
    name: string;
    key: string;
  }

  export interface SuggestedFilters {
    header: string;
    filters: Filter[];
  }

  export interface Ne {
    lat: number;
    lng: number;
  }

  export interface Sw {
    lat: number;
    lng: number;
  }

  export interface SuggestedBounds {
    ne: Ne;
    sw: Sw;
  }

  export interface Item2 {
    summary: string;
    type: string;
    reasonName: string;
  }

  export interface Reasons {
    count: number;
    items: Item2[];
  }

  export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
  }

  export interface Location {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    distance: number;
    cc: string;
    country: string;
    formattedAddress: string[];
    postalCode: string;
    city: string;
    state: string;
    neighborhood: string;
    crossStreet: string;
  }

  export interface Icon {
    prefix: string;
    suffix: string;
  }

  export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
  }

  export interface Photos {
    count: number;
    groups: any[];
  }

  export interface VenuePage {
    id: string;
  }

  export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
    photos: Photos;
    venuePage: VenuePage;
  }

  export interface Item {
    reasons: Reasons;
    venue: Venue;
    referralId: string;
  }

  export interface Group {
    type: string;
    name: string;
    items: Item[];
  }

  export interface Response {
    suggestedFilters: SuggestedFilters;
    suggestedRadius: number;
    headerLocation: string;
    headerFullLocation: string;
    headerLocationGranularity: string;
    totalResults: number;
    suggestedBounds: SuggestedBounds;
    groups: Group[];
  }

  export interface RootObject {
    meta: Meta;
    response: Response;
  }

}

export declare module FourSquareTrendingResponse {

  export interface Meta {
    code: number;
    requestId: string;
  }

  export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
  }

  export interface Location {
    address: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    postalCode: string;
    cc: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: string[];
    neighborhood: string;
  }

  export interface Icon {
    prefix: string;
    suffix: string;
  }

  export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
  }

  export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
  }

  export interface Center {
    lat: number;
    lng: number;
  }

  export interface Ne {
    lat: number;
    lng: number;
  }

  export interface Sw {
    lat: number;
    lng: number;
  }

  export interface Bounds {
    ne: Ne;
    sw: Sw;
  }

  export interface Geometry {
    center: Center;
    bounds: Bounds;
  }

  export interface Feature {
    cc: string;
    name: string;
    displayName: string;
    matchedName: string;
    highlightedName: string;
    woeType: number;
    slug: string;
    id: string;
    longId: string;
    geometry: Geometry;
  }

  export interface Geocode {
    what: string;
    where: string;
    feature: Feature;
    parents: any[];
  }

  export interface Response {
    venues: Venue[];
    geocode: Geocode;
  }

  export interface RootObject {
    meta: Meta;
    response: Response;
  }

}

