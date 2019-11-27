

var  willItExposeWhiteShahPiece = {
	piecePlace: "",
	
	itExposesDown: "",
	itExposesUp: "",
	itExposesRight: "",
	itExposesLeft: "",
	itExposesDownRight: "",
	itExposesDownLeft: "",
	itExposesUpright: "",
	itExposesUpLeft: "",
	
	thereIsShahDown: "",
	
	holder: "",
	place: "",
	
	doesItExposesUp: function() {
		this.holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(holder[0]);
			i--;
			for (i; i >= 0; i--) {
				this.holder[0] = lettersAndNumbers[i]
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					console.log("alert" + this.place);
					if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						console.log("alert" + this.place);
						break;
					} else {console.log("yoh"); break; }
				}
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[0]);
				i++;
				for (i; i < 8; i++) {
					holder[0] = lettersAndNumbers[i]
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.kale") {
							this.itExposesDown = true;
							break;
						} else {
							this.itExposesDown = false;
							break;
						}
					}
				}
			} else {
				this.itExposesDown = false;
			}
		}
	},
	doesItExposesDown: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(holder[0]);
			i++;
			for (i; i <= 7; i++) {
				holder[0] = lettersAndNumbers[i]
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					console.log("alert" + this.place);
					if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						console.log("alert" + this.place);
						break;
					} else {console.log("yoh"); break; }
				}
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[0]);
				i--;
				for (i; i >= 0; i--) {
					holder[0] = lettersAndNumbers[i]
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.kale") {
							this.itExposesUp = true;
							break;
						} else {
							this.itExposesUp = false;
							break;
						}
					}
				}
			} else {
				this.itExposesUp = false;
			}
		}
	},
	doesItExposesLeft: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[1]) > 8) {
			var i = lettersAndNumbers.indexOf(holder[1]);
			i--;
			for (i; i >= 8; i--) {
				holder[1] = lettersAndNumbers[i]
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh"); 
					break; }
				}
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[1]);
				i++;
				for (i; i < 16; i++) {
					holder[1] = lettersAndNumbers[i]
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.kale") {
							this.itExposesRight = true;
							break;
						} else {
							this.itExposesRight = false;
							break;
						}
					}
				}
			} else {
				this.itExposesRight = false;
			}
		}
	},
	doesItExposesRight: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[1]) > 8) {
			var i = lettersAndNumbers.indexOf(holder[1]);
			i++;
			for (i; i <= 15; i++) {
				holder[1] = lettersAndNumbers[i]
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh"); 
					break; }
				}
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[1]);
				i--;
				for (i; i >= 8; i--) {
					holder[1] = lettersAndNumbers[i]
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.kale") {
							this.itExposesLeft = true;
							break;
						} else {
							this.itExposesLeft = false;
							break;
						}
					}
				}
			} else {
				this.itExposesLeft = false;
			}
		}
	},
	doesItExposesUpLeft: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(holder[0]);
			var i2 = lettersAndNumbers.indexOf(holder[1]);
			i2--;
			i--;
			for (i; i >= 0; i--) {
				holder[0] = lettersAndNumbers[i];
				holder[1] = lettersAndNumbers[i2];
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh"); 
					break; }
				}
				i2--;
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[0]);
				i2 = lettersAndNumbers.indexOf(holder[1]);
				i2++;
				i++;
				for (i; i < 8; i++) {
					holder[0] = lettersAndNumbers[i];
					holder[1] = lettersAndNumbers[i2];
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.fil") {
							this.itExposesDownRight = true;
							break;
						} else {
							this.itExposesDownRight = false;
							break;
						}
					}
				i2++;
				}
			} else {
				this.itExposesDownRight = false;
			}
		}
	},
	doesItExposesUpRight: function() {
		this.holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(this.holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(this.holder[0]);
			var i2 = lettersAndNumbers.indexOf(this.holder[1]);
			i2++;
			i--;
			for (i; i >= 0; i--) {
				this.holder[0] = lettersAndNumbers[i];
				this.holder[1] = lettersAndNumbers[i2];
				this.place = this.holder.join("");
				if (document.getElementById(this.place)) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place) && document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh"); 
					break; }
				}
				i2++;
			}
			if (this.thereIsShahDown) {
				this.holder = this.piecePlace.split("");
				//console.log("shah var");
				i = lettersAndNumbers.indexOf(this.holder[0]);
				i2 = lettersAndNumbers.indexOf(this.holder[1]);
				i2--;
				i++;
				for (i; i < 8; i++) {
					this.holder[0] = lettersAndNumbers[i];
					this.holder[1] = lettersAndNumbers[i2];
					this.place = this.holder.join("");
					//console.log("kontrol edilen yer");
					//console.log(this.place);
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.fil") {
							this.itExposesDownLeft = true;
							break;
						} else {
							this.itExposesDownLeft = false;
							break;
						}
					}
					i2--;
				}
			} else {
				this.itExposesDownLeft = false;
			}
		}
	},
	doesItExposesDownLeft: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(holder[0]);
			var i2 = lettersAndNumbers.indexOf(holder[1]);
			i2--;
			i++;
			for (i; i <= 7; i++) {
				holder[0] = lettersAndNumbers[i];
				holder[1] = lettersAndNumbers[i2];
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh");
						this.thereIsShahDown = false;
					break; }
				}
				i2--;
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[0]);
				i2 = lettersAndNumbers.indexOf(holder[1]);
				i2++;
				i--;
				for (i; i >= 0; i--) {
					holder[0] = lettersAndNumbers[i];
					holder[1] = lettersAndNumbers[i2];
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.fil") {
							this.itExposesUpright = true;
							break;
						} else {
							this.itExposesUpright = false;
							break;
						}
					}
				}
			} else {
				this.itExposesUpright = false;
			}
		}
	},
	doesItExposesDownRight: function() {
		holder = this.piecePlace.split("");
		if (lettersAndNumbers.indexOf(holder[0]) > 0) {
			var i = lettersAndNumbers.indexOf(holder[0]);
			var i2 = lettersAndNumbers.indexOf(holder[1]);
			i2++;
			i++;
			for (i; i <= 7; i++) {
				holder[0] = lettersAndNumbers[i];
				holder[1] = lettersAndNumbers[i2];
				this.place = holder.join("");
				if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
					//console.log("alert" + this.place);
					if(document.getElementById(this.place).innerHTML == "b.shah") {
						this.thereIsShahDown = true;
						//console.log("alert" + this.place);
						break;
					} else {//console.log("yoh"); 
					break; }
				}
				i2++;
			}
			if (this.thereIsShahDown) {
				holder = this.piecePlace.split("");
				i = lettersAndNumbers.indexOf(holder[0]);
				i2 = lettersAndNumbers.indexOf(holder[1]);
				i2--;
				i--;
				for (i; i >= 0; i--) {
					holder[0] = lettersAndNumbers[i];
					holder[1] = lettersAndNumbers[i2];
					this.place = holder.join("");
					if (document.getElementById(this.place) && document.getElementById(this.place).innerHTML) {
						if(document.getElementById(this.place).innerHTML == "s.vezir" || document.getElementById(this.place).innerHTML == "s.fil") {
							this.itExposesUpLeft = true;
							break;
						} else {
							this.itExposesUpLeft = false;
							break;
						}
					}
				}
			} else {
				this.itExposesUpLeft = false;
			}
		}
	}
	
}