import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{
  name: string;
  memory: number;
  model:string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;


  constructor(){}
  ngOnInit(): void {
    this.name = "Samsung";
    this.memory = 33;
    this.model = "A20";
    this.colors = {
      phone: "black",
      os : "Android"
    }
    this.options = ["RAM 4", "Android 4.0", "Display OLED" ]
  }


  showEdit() {
    this.isEdit = !this.isEdit;
  }


  addOpt(option) {
    this.options.unshift(option.value);
    option.value = "";
    return false;
  }

  deleteOpt(option) {
    for( let i = 0; i < this.options.length; i++ ) {
      if( this.options[i] == option ) {
        this.options.splice(i, 1);
        break
      }
    }
  }

  phoneSelect(phoneName) {
    if(phoneName == "iphone") {
      this.name = "Iphone";
      this.memory = 270;
      this.model = "11 Pro";
      this.colors = {
        phone: "red",
        os : "IOS"
      }
      this.options = ["RAM 6", "IOS 16.0", "Display IPS" ]
    }
    else if( phoneName == "samsung" ) {
      this.name = "Samsung";
      this.memory = 33;
      this.model = "A20";
      this.colors = {
        phone: "black",
        os : "Android"
      }
      this.options = ["RAM 4", "Android 4.0", "Display OLED" ]
    }
    else {
      this.name = "Xiaomi";
      this.memory = 33;
      this.model = "A20";
      this.colors = {
        phone: "black",
        os : "Android"
      }
      this.options = ["RAM 4", "Android 4.0", "Display OLED" ]
    }
    
  }

  
}

interface Colors {
  phone:string,
  os: string,
}
