import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { Character } from 'app/character.model'
@Component({
  selector: 'app-messsage',
  templateUrl: './messsage.component.html',
  styleUrls: ['./messsage.component.css']
})
export class MesssageComponent implements OnInit {

  constructor(private dataserice: DataService) { }

  allCharacters: Character[] = []

  ngOnInit() {

  }
  get() {

    this.dataserice.getCharacterList().subscribe(result => {
      // console.log(`Marvel all characters: ${result.data.results}`);
      for(var index in result.data.results){
        // debugger;
        // console.log(`name: ${result.data.results[index].name}`);        
        let newCharacter = new Character();
        newCharacter.name = result.data.results[index].name;
        newCharacter.description = result.data.results[index].description;
        newCharacter.imageUrl = result.data.results[index].resourceURI;
        
        this.allCharacters.push(newCharacter);
      }
      // this.allCharacters = result;
    });

    //this.data= this.dataservice.getData();
    // this.dataserice.getMockCharacterList().subscribe(result => {
    //   console.log(`all characters: ${JSON.stringify(result)}`);
    //   this.allCharacters = result;
    // });
  }
}
