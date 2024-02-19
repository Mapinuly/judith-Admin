import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/config';
import { AuthService } from './auth.service';
import { ConfigDetails } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cards = AppConfig.baseUrl + AppConfig.cards;
  private teamCards = AppConfig.baseUrl + AppConfig.teamCards;
  private weHere = AppConfig.baseUrl + AppConfig.weHere;
  private events = AppConfig.baseUrl + AppConfig.events;
  private deleteEventData=AppConfig.baseUrl + AppConfig.deleteEventData;
  private createEvent=AppConfig.baseUrl + AppConfig.createEvent;
  private list = AppConfig.baseUrl + AppConfig.list;
  private contact = AppConfig.baseUrl + AppConfig.contactUs;

  private synopsis = AppConfig.baseUrl + AppConfig.synopsis;

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ConfigDetails.authToken}`
    });
    const requestOptions = {
      headers: headers
    };
    return requestOptions
  }

  // getData() {
  //   return this.http.get(this.cards)
  // }

  addCard(data: any) {
    return this.http.post(this.cards, data, this.getHeaders())
  }

  getCardsData() {
    return this.http.get(this.cards, this.getHeaders())
  }

  deleteCard(id: any) {
    return this.http.delete(`${this.cards}/${id}`, this.getHeaders())
  }

  deleteContact(id: any) {
    return this.http.delete(`${this.contact}/${id}`, this.getHeaders())
  }

  deleteTeamCard(id: any) {
    return this.http.delete(`${this.teamCards}/${id}`, this.getHeaders())
  }
  
  deleteEvent(id: any) {
    return this.http.delete(`${this.deleteEventData}/${id}`, this.getHeaders())
  }

  addTeamCard(data: any) {
    return this.http.post(this.teamCards, data, this.getHeaders())
  }

  editCard(data: any) {
    return this.http.put(`${this.cards}`, data, this.getHeaders());
  }

  getTeamCards() {
    return this.http.get(this.teamCards, this.getHeaders())
  }

  getListData() {
    return this.http.get(this.list, this.getHeaders())
  }

  getContactList(){
    return this.http.get(this.contact, this.getHeaders())

  }

  addWeAreHeredata(data: any) {
    return this.http.post(this.weHere, data, this.getHeaders());
  }

  getWeAreHereData() {
    return this.http.get(this.weHere, this.getHeaders());
  }
    
  deleteWeAreHere(id: any) {
    return this.http.delete(`${this.weHere}/${id}`, this.getHeaders())
  }

  addSynopsis(data: any) {
    return this.http.post(this.synopsis, data, this.getHeaders())
  }

  getSynopsiseData() {
    return this.http.get(this.synopsis, this.getHeaders());
  }
  
  editSynopsiseData(data: any) {
    return this.http.post(`${this.synopsis}`,data, this.getHeaders())
  }

  deletesynopisis(data: any) {
    return this.http.delete(`${this.synopsis}/${data.id}`, this.getHeaders())
  }


  editTeamCard(data: any) {
    return this.http.put(`${this.teamCards}`, data, this.getHeaders());
  }

  editEventData(data: any) {
    return this.http.put(`${this.events}`, data, this.getHeaders());
  }

  getEventData() {
    return this.http.get(this.events, this.getHeaders());
  }

  addEventData(data: any) {
    return this.http.post(this.events, data, this.getHeaders());
  }
}
