import { Component, OnInit } from '@angular/core';
// import { handicaps }  from './current_mens_handicaps';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  Handicaps = [
  {
    "Name": "Abramson, Henry J",
    "H.I.": 35.9,
    "Black": 39,
    "White": 38
  },
  {
    "Name": "Acevedo, Jon K",
    "H.I.": 12.5,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Adams, Dennis",
    "H.I.": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Alexander, Steve",
    "H.I.": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Alvarez, Vince",
    "H.I.": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Anderson, Richard J",
    "H.I.": 23.8,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Anderson, Robert E",
    "H.I.": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Anderson, Thomas K",
    "H.I.": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Andrews, Greg",
    "H.I.": 22.4,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Anzures, Robert E",
    "H.I.": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Aoyama, Yoshihiko",
    "H.I.": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Archer, Mike",
    "H.I.": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Armedilla, Mr. Arnold Rivel",
    "H.I.": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Arnold, Michael",
    "H.I.": 21.5,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Arvizu, Bruce",
    "H.I.": 25.2,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Atkinson, John E",
    "H.I.": 11,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Bakos, Dave",
    "H.I.": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Barajas, Jose",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Barker, Jon",
    "H.I.": 23.9,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Barrett, Luke",
    "H.I.": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Barth, Mr. Petter",
    "H.I.": 4.2,
    "Black": 5,
    "White": 4
  },
  {
    "Name": "Basile, Luke",
    "H.I.": 0,
    "Black": 0,
    "White": 0
  },
  {
    "Name": "Basile, Nathan",
    "H.I.": 21.2,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Belavic, Patrick M",
    "H.I.": 6.6,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Berger, Scott V",
    "H.I.": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Billin, Mr. John Derrick",
    "H.I.": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Bitner, Donald P",
    "H.I.": 11,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Blake, Mr. David",
    "H.I.": 14.1,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Blandin, John",
    "H.I.": 20.5,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Borquez, Rick",
    "H.I.": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Bowman, David R",
    "H.I.": 8,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Bradley, Bryan",
    "H.I.": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Brennan, Michael D",
    "H.I.": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Brown, Rick",
    "H.I.": 8.1,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Buckingham, Mark",
    "H.I.": 23.6,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Burns, Don A",
    "H.I.": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Buss, Dave H",
    "H.I.": 16.9,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Caligiuri, Andrew",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Camera, John W",
    "H.I.": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Campise, Jerry",
    "H.I.": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Canfield, Dale",
    "H.I.": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Carter, John C",
    "H.I.": 22.6,
    "Black": 25,
    "White": 24
  },
  {
    "Name": "Casper, Michael",
    "H.I.": 16.9,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Cassan, David",
    "H.I.": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Cassanego, Michael",
    "H.I.": 17.9,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Chavez, Pat",
    "H.I.": 14.9,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Chergey, Daniel M",
    "H.I.": 9.6,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Cheung, Adolf L",
    "H.I.": 21.9,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Ciuffitelli, Larry C",
    "H.I.": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Clark, Gerald L",
    "H.I.": 26.6,
    "Black": 29,
    "White": 28
  },
  {
    "Name": "Cleaver, Mr. Edward",
    "H.I.": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Cohen, Brian M",
    "H.I.": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Colbert, Gary",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Colburn, Mr. Ron R",
    "H.I.": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Corona, Alessandro",
    "H.I.": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Cressman, John",
    "H.I.": 14.2,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Croick, Dustin",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Cromwell, Rick",
    "H.I.": 7,
    "Black": 8,
    "White": 7
  },
  {
    "Name": "Crowell, Chris",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Crum, Mr. Andrew",
    "H.I.": 8.5,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Crum, Eugene",
    "H.I.": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Cruz, Dustin",
    "H.I.": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Cruz, Michael",
    "H.I.": 11.2,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Cunningham, Charles",
    "H.I.": 24.3,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Darwin, Robert",
    "H.I.": 1.5,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Davis, Matt",
    "H.I.": 8.1,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Dawson, Dave W",
    "H.I.": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Day, Mr. Joseph R.",
    "H.I.": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Deese, Steven",
    "H.I.": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Denning, Randy",
    "H.I.": 27,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Desmet, Grant",
    "H.I.": 28.2,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Devita, Vincent",
    "H.I.": 23.5,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Didziulis, Stephen V",
    "H.I.": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "East, Mr Ethan D",
    "H.I.": 8.3,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Elkins, Rand J",
    "H.I.": 21,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Ellis, Jackson",
    "H.I.": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Ellis, Kirk",
    "H.I.": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "English, Paul",
    "H.I.": 1.9,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Euvino, Vince",
    "H.I.": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Eyermann, Peter S",
    "H.I.": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Faherty, Michael S",
    "H.I.": 11.3,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Fernandez, Cameron",
    "H.I.": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Fernandez, Ron",
    "H.I.": 8.6,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Fero, William",
    "H.I.": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Ferris, Larry P",
    "H.I.": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Fisher, Roger M",
    "H.I.": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Foldesi, Robert S",
    "H.I.": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Freeth, Joe",
    "H.I.": "10.1R",
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Frye, Steven W",
    "H.I.": 17.8,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Gaona, Jared",
    "H.I.": 4.9,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Garrity, Thomas M",
    "H.I.": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Gaughen, Dylan",
    "H.I.": 2.6,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Giacomazzi, Mickey",
    "H.I.": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Goldstein, Derek",
    "H.I.": 5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Gonzalez, Alonzo",
    "H.I.": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Graham, Dylan",
    "H.I.": 19.5,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Graver, Brian",
    "H.I.": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Groff, Blake",
    "H.I.": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Guhl, Bob",
    "H.I.": 24.9,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Halloran, Jeff",
    "H.I.": 9,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Hart, Richard",
    "H.I.": 30.5,
    "Black": 33,
    "White": 32
  },
  {
    "Name": "Hatfield, Gregory L",
    "H.I.": 6,
    "Black": 7,
    "White": 6
  },
  {
    "Name": "Hawfield, William D",
    "H.I.": 12.9,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Haws, John",
    "H.I.": 11.9,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Hemphill, Richard L",
    "H.I.": 18.5,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Henderson, Phillips",
    "H.I.": 24.2,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Herbert, Edward",
    "H.I.": 28.3,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Herbert, Mark",
    "H.I.": 6.3,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Herman, Carl A",
    "H.I.": 31.7,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Herson, Adam D",
    "H.I.": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Hertz, David",
    "H.I.": 23.6,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Hertz, Richard A",
    "H.I.": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Hilliard, Michael",
    "H.I.": 1.9,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Hindley, Mr. Hal",
    "H.I.": 18.1,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Hlinka, Warren",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Hodge, Cliff",
    "H.I.": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Holder, Mark",
    "H.I.": 11.7,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Holmes, Danny P",
    "H.I.": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Holt, Edwin C",
    "H.I.": 7.1,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Humphrey, William J",
    "H.I.": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Impellizzeri, Jack",
    "H.I.": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Jacalone, Robert",
    "H.I.": 9.2,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Jacobson, Andrew",
    "H.I.": 13.3,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Jacobus, Mr Robert C",
    "H.I.": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Jaeger, Mr. Kurt",
    "H.I.": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Jake, Poppen",
    "H.I.": 13.5,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Jankowski, Mr. Michael",
    "H.I.": 11.9,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Jasper, Aaron",
    "H.I.": 13,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Johnston, Thomas S",
    "H.I.": 24.7,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Jones, Mr. Allen L",
    "H.I.": 15.8,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Kaiser, Todd",
    "H.I.": 6.8,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Kegley, Steven F",
    "H.I.": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Kelly Jr, Charles D",
    "H.I.": 19.4,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "King, Jeff",
    "H.I.": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Kinnan, Jere F",
    "H.I.": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Knell, William L",
    "H.I.": 22.2,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Knight, Joe",
    "H.I.": 26.9,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Knoblock, Richard",
    "H.I.": 21.5,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Knudson, Mitch",
    "H.I.": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Koeritz, Robert C",
    "H.I.": 24.1,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Koslov, John",
    "H.I.": 33.4,
    "Black": 36,
    "White": 35
  },
  {
    "Name": "Kuppenbender, Gary J",
    "H.I.": 11.7,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Kurzweil, Sean E.",
    "H.I.": 15.7,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Lacho, Brent M",
    "H.I.": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Ladd, Leon D",
    "H.I.": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Lam, Willie",
    "H.I.": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Lampert, Danny",
    "H.I.": 12.3,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Landry Jr, Robert M",
    "H.I.": 25.2,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Lantz, Damon P",
    "H.I.": 6.8,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Lantz, Jack E",
    "H.I.": 21.6,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Larsen, John A",
    "H.I.": 20.5,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Lashley, Kevin",
    "H.I.": 16.6,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Lasley, Brian",
    "H.I.": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Lee, Glenn",
    "H.I.": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Leff, Ryan",
    "H.I.": 7.3,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Leibin, Cory",
    "H.I.": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Leibin, Mike",
    "H.I.": 4.2,
    "Black": 5,
    "White": 4
  },
  {
    "Name": "Leonard, Joseph",
    "H.I.": 0.1,
    "Black": 0,
    "White": 0
  },
  {
    "Name": "Lindgren, Edward",
    "H.I.": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Linklater, Scott",
    "H.I.": 2.7,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Lockett, Jake R.",
    "H.I.": 12.6,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Lofgren, James",
    "H.I.": 7.1,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Lomas, Steve",
    "H.I.": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Lopez, Dr. Alex D",
    "H.I.": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Lynch, Michael J",
    "H.I.": 27.5,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Lynch Jr, Michael P",
    "H.I.": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Lytle, Nathan",
    "H.I.": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Major, James",
    "H.I.": 26,
    "Black": 28,
    "White": 28
  },
  {
    "Name": "Maldonado, Juan J",
    "H.I.": 15.3,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Maley, Ryan",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Marcey, Dr. David",
    "H.I.": 9.7,
    "Black": 11,
    "White": 10
  },
  {
    "Name": "Marsango, Edward A",
    "H.I.": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Martin, Edgar",
    "H.I.": 12.9,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Martinez, Mr. Andres A.",
    "H.I.": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Mason, Jeffrey T",
    "H.I.": 24.5,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "McComb, Doug",
    "H.I.": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McCurdy, Michael",
    "H.I.": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "McDade, Blaze M",
    "H.I.": 19.7,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McDade DDS, Patrick B",
    "H.I.": 19.4,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McDonnell, Michael W",
    "H.I.": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "McKinley, Mac",
    "H.I.": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "McKinney, Dennis",
    "H.I.": 23.4,
    "Black": 25,
    "White": 25
  },
  {
    "Name": "McNulty, Benny",
    "H.I.": 25.6,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Mettam, Rocky",
    "H.I.": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Meyers, Scott S",
    "H.I.": 8,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Meyring, James",
    "H.I.": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Miller, Gordon",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Miller, Steven T",
    "H.I.": 20.2,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Miya, Kenneth",
    "H.I.": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Montgomery, Bob",
    "H.I.": 21,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Morales, Dennis R",
    "H.I.": 35.6,
    "Black": 39,
    "White": 38
  },
  {
    "Name": "Morelli, Michael J",
    "H.I.": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Morrison, Keith B",
    "H.I.": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Moss, Michael L",
    "H.I.": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Munro, Brodie",
    "H.I.": 4.5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Munro, Jason S",
    "H.I.": 17.9,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Neale, Marc",
    "H.I.": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Neary, Robert L",
    "H.I.": 18.9,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Negrete, Rene",
    "H.I.": 36.4,
    "Black": 40,
    "White": 39
  },
  {
    "Name": "Nellis, Sam",
    "H.I.": 21.7,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Nelson, Mr Brad C",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Nelson, Robert P",
    "H.I.": 26.9,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Nelson, Tony A",
    "H.I.": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Nep, Michael",
    "H.I.": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Nestroyl, Paul F",
    "H.I.": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Neufeld, Tim",
    "H.I.": 12.7,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Noh, Mr. Thomas",
    "H.I.": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Norkin, Mr. Richard A",
    "H.I.": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Ogg, Robert C",
    "H.I.": 21.8,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Ord, Rick",
    "H.I.": 12.4,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Otoole, Kevin M",
    "H.I.": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Owens, Steve",
    "H.I.": 17.5,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Palmer, Charles F",
    "H.I.": 27.5,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Paris, Kenneth S",
    "H.I.": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Paschal, Ken W",
    "H.I.": 25.6,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Patton, Bob",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Pearson, David",
    "H.I.": 18.7,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Pederson, Grant",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Pelto, Bryan",
    "H.I.": 13,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Pett, James",
    "H.I.": 10.1,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Pizzola, Justin",
    "H.I.": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Ploesch, Wayne",
    "H.I.": 7.2,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Pollack, Christopher A",
    "H.I.": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Pollard, Daryl",
    "H.I.": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Powell, Terry W",
    "H.I.": 5.6,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Powers, James W",
    "H.I.": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Powers, Thomas E",
    "H.I.": "22.0M",
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Quinn, Michael",
    "H.I.": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Ramstead, Bob",
    "H.I.": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Redford, Kerry D",
    "H.I.": 5.7,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Reithmayr, Matt",
    "H.I.": 25,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Reposar, Thomas M",
    "H.I.": 28.8,
    "Black": 31,
    "White": 31
  },
  {
    "Name": "Richard, Lynn",
    "H.I.": 19.1,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Richman, Andrew",
    "H.I.": 11.3,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Roberts, Brian S",
    "H.I.": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Robertson, Fred",
    "H.I.": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Robman, Louis B",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Roe, Michael",
    "H.I.": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Roessell, Jack D",
    "H.I.": 1.7,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Romero, Fred",
    "H.I.": 30.9,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Roth, Mr. Gerald",
    "H.I.": 30.2,
    "Black": 33,
    "White": 32
  },
  {
    "Name": "Ryusaki, Ryan",
    "H.I.": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Saberhagen, Bret",
    "H.I.": 4,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Saberhagen, Drew",
    "H.I.": 5.8,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Saikali, Joe",
    "H.I.": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Salinas, Ryan",
    "H.I.": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Sallin, Marc",
    "H.I.": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Samuels, Harold F",
    "H.I.": 21.1,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Schaad, Norman W",
    "H.I.": 29.8,
    "Black": 32,
    "White": 32
  },
  {
    "Name": "Schiffner, John",
    "H.I.": 12.4,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Schittone, Victor",
    "H.I.": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Schock, John O",
    "H.I.": 25,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Schwendimann, Mr. David F",
    "H.I.": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Sciarrino, Terry A",
    "H.I.": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Scott, Robert D",
    "H.I.": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Sherman, Frank A",
    "H.I.": 13.6,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Shmoldas, John D",
    "H.I.": 32.4,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Sikkeland, Jay",
    "H.I.": 15.2,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Simon, Shawn",
    "H.I.": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Smith, Dan",
    "H.I.": 9.4,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Smith, Daniel",
    "H.I.": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Smith, Joseph",
    "H.I.": 13.5,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Smith, Steven W",
    "H.I.": 25.8,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Spurrier, Don",
    "H.I.": 17.8,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Stevens, Bradley D",
    "H.I.": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Stilley, Larry",
    "H.I.": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Stillman, David M",
    "H.I.": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Strom, Jeff",
    "H.I.": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Struck, Greg C",
    "H.I.": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Sultanali, Jamal",
    "H.I.": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Sylvester, Dwan V",
    "H.I.": 31.3,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Tankersley, James",
    "H.I.": 27.6,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Taylor, Lonnie R",
    "H.I.": 8.2,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Taylor, Steve",
    "H.I.": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Thomas, Robert T",
    "H.I.": 27,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Thompson, Jason",
    "H.I.": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Thompson, Ronald W",
    "H.I.": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Toland, Michael",
    "H.I.": 15.2,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Tominaga, Rory J",
    "H.I.": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Treuheit, Michael",
    "H.I.": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Tribe, Trent",
    "H.I.": 7.7,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Tushla, Todd",
    "H.I.": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Valdespino, Jack",
    "H.I.": "22.5R",
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Vallejos, Greg",
    "H.I.": 18.1,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Violin, Mark F",
    "H.I.": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Vitacco, William R",
    "H.I.": 16.6,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Warekois, Tom E",
    "H.I.": 21.9,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Wendland, Drew",
    "H.I.": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Wiksell, Wendell R",
    "H.I.": 21.7,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Williams, Eric",
    "H.I.": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Williams, George M",
    "H.I.": 13.3,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Williams, Paul R",
    "H.I.": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Willis, Lee",
    "H.I.": 16.2,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Wilson, Keith",
    "H.I.": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Wolf, David A",
    "H.I.": 13.9,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Wolf, Jerry",
    "H.I.": 34.3,
    "Black": 37,
    "White": 36
  },
  {
    "Name": "Wolinsky, Fred",
    "H.I.": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Wyman, James L",
    "H.I.": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Wynands, Danny M",
    "H.I.": 13.6,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Yamagishi, Fredrick G",
    "H.I.": 15.7,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Yoshimoto, Kevin",
    "H.I.": 17.7,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Zabel, Dane",
    "H.I.": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Zelden, Charles",
    "H.I.": 21.8,
    "Black": 24,
    "White": 23
  }
];
  constructor() {
    console.log('handi', this.Handicaps);
  }

  ngOnInit() {}

}