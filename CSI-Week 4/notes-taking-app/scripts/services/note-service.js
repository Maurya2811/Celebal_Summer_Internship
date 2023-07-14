// CRUD
import Note from '../models/note.js';
export const noteOperations ={
    notes:[],
 add(noteObject){
    const note = new Note(noteObject);
    this.notes.push(note);
 },
 total(){
    return this.notes.length;
 },
 markTotal(){
    return 0;
 },
 unMarkTotal(){
    return 0;
 },
 remove(){

 },
 search(){

 },
 sort(){

 },
 save(){

 },
 update(){

 },
 load(){

 }
}