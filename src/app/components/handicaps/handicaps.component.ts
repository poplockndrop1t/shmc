import { Component, OnInit } from '@angular/core';
// import { handicaps }  from './current_mens_handicaps';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  members = [
  {
    "Name": "Abramson, Henry J",
    "Handicap": 35.9,
    "Black": 39,
    "White": 38
  },
  {
    "Name": "Acevedo, Jon K",
    "Handicap": 12.5,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Adams, Dennis",
    "Handicap": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Alexander, Steve",
    "Handicap": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Alvarez, Vince",
    "Handicap": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Anderson, Richard J",
    "Handicap": 23.8,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Anderson, Robert E",
    "Handicap": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Anderson, Thomas K",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Andrews, Greg",
    "Handicap": 22.4,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Anzures, Robert E",
    "Handicap": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Aoyama, Yoshihiko",
    "Handicap": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Archer, Mike",
    "Handicap": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Armedilla, Mr. Arnold Rivel",
    "Handicap": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Arnold, Michael",
    "Handicap": 21.5,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Arvizu, Bruce",
    "Handicap": 25.2,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Atkinson, John E",
    "Handicap": 11,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Bakos, Dave",
    "Handicap": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Barajas, Jose",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Barker, Jon",
    "Handicap": 23.9,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Barrett, Luke",
    "Handicap": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Barth, Mr. Petter",
    "Handicap": 4.2,
    "Black": 5,
    "White": 4
  },
  {
    "Name": "Basile, Luke",
    "Handicap": 0,
    "Black": 0,
    "White": 0
  },
  {
    "Name": "Basile, Nathan",
    "Handicap": 21.2,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Belavic, Patrick M",
    "Handicap": 6.6,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Berger, Scott V",
    "Handicap": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Billin, Mr. John Derrick",
    "Handicap": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Bitner, Donald P",
    "Handicap": 11,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Blake, Mr. David",
    "Handicap": 14.1,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Blandin, John",
    "Handicap": 20.5,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Borquez, Rick",
    "Handicap": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Bowman, David R",
    "Handicap": 8,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Bradley, Bryan",
    "Handicap": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Brennan, Michael D",
    "Handicap": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Brown, Rick",
    "Handicap": 8.1,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Buckingham, Mark",
    "Handicap": 23.6,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Burns, Don A",
    "Handicap": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Buss, Dave H",
    "Handicap": 16.9,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Caligiuri, Andrew",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Camera, John W",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Campise, Jerry",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Canfield, Dale",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Carter, John C",
    "Handicap": 22.6,
    "Black": 25,
    "White": 24
  },
  {
    "Name": "Casper, Michael",
    "Handicap": 16.9,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Cassan, David",
    "Handicap": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Cassanego, Michael",
    "Handicap": 17.9,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Chavez, Pat",
    "Handicap": 14.9,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Chergey, Daniel M",
    "Handicap": 9.6,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Cheung, Adolf L",
    "Handicap": 21.9,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Ciuffitelli, Larry C",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Clark, Gerald L",
    "Handicap": 26.6,
    "Black": 29,
    "White": 28
  },
  {
    "Name": "Cleaver, Mr. Edward",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Cohen, Brian M",
    "Handicap": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Colbert, Gary",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Colburn, Mr. Ron R",
    "Handicap": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Corona, Alessandro",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Cressman, John",
    "Handicap": 14.2,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Croick, Dustin",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Cromwell, Rick",
    "Handicap": 7,
    "Black": 8,
    "White": 7
  },
  {
    "Name": "Crowell, Chris",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Crum, Mr. Andrew",
    "Handicap": 8.5,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Crum, Eugene",
    "Handicap": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Cruz, Dustin",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Cruz, Michael",
    "Handicap": 11.2,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Cunningham, Charles",
    "Handicap": 24.3,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Darwin, Robert",
    "Handicap": 1.5,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Davis, Matt",
    "Handicap": 8.1,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Dawson, Dave W",
    "Handicap": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Day, Mr. Joseph R.",
    "Handicap": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Deese, Steven",
    "Handicap": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Denning, Randy",
    "Handicap": 27,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Desmet, Grant",
    "Handicap": 28.2,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Devita, Vincent",
    "Handicap": 23.5,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Didziulis, Stephen V",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "East, Mr Ethan D",
    "Handicap": 8.3,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Elkins, Rand J",
    "Handicap": 21,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Ellis, Jackson",
    "Handicap": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Ellis, Kirk",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "English, Paul",
    "Handicap": 1.9,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Euvino, Vince",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Eyermann, Peter S",
    "Handicap": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Faherty, Michael S",
    "Handicap": 11.3,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Fernandez, Cameron",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Fernandez, Ron",
    "Handicap": 8.6,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Fero, William",
    "Handicap": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Ferris, Larry P",
    "Handicap": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Fisher, Roger M",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Foldesi, Robert S",
    "Handicap": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Freeth, Joe",
    "Handicap": "10.1R",
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Frye, Steven W",
    "Handicap": 17.8,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Gaona, Jared",
    "Handicap": 4.9,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Garrity, Thomas M",
    "Handicap": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Gaughen, Dylan",
    "Handicap": 2.6,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Giacomazzi, Mickey",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Goldstein, Derek",
    "Handicap": 5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Gonzalez, Alonzo",
    "Handicap": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Graham, Dylan",
    "Handicap": 19.5,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Graver, Brian",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Groff, Blake",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Guhl, Bob",
    "Handicap": 24.9,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Halloran, Jeff",
    "Handicap": 9,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Hart, Richard",
    "Handicap": 30.5,
    "Black": 33,
    "White": 32
  },
  {
    "Name": "Hatfield, Gregory L",
    "Handicap": 6,
    "Black": 7,
    "White": 6
  },
  {
    "Name": "Hawfield, William D",
    "Handicap": 12.9,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Haws, John",
    "Handicap": 11.9,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Hemphill, Richard L",
    "Handicap": 18.5,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Henderson, Phillips",
    "Handicap": 24.2,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Herbert, Edward",
    "Handicap": 28.3,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Herbert, Mark",
    "Handicap": 6.3,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Herman, Carl A",
    "Handicap": 31.7,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Herson, Adam D",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Hertz, David",
    "Handicap": 23.6,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Hertz, Richard A",
    "Handicap": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Hilliard, Michael",
    "Handicap": 1.9,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Hindley, Mr. Hal",
    "Handicap": 18.1,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Hlinka, Warren",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Hodge, Cliff",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Holder, Mark",
    "Handicap": 11.7,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Holmes, Danny P",
    "Handicap": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Holt, Edwin C",
    "Handicap": 7.1,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Humphrey, William J",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Impellizzeri, Jack",
    "Handicap": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Jacalone, Robert",
    "Handicap": 9.2,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Jacobson, Andrew",
    "Handicap": 13.3,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Jacobus, Mr Robert C",
    "Handicap": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Jaeger, Mr. Kurt",
    "Handicap": 14,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Jake, Poppen",
    "Handicap": 13.5,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Jankowski, Mr. Michael",
    "Handicap": 11.9,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Jasper, Aaron",
    "Handicap": 13,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Johnston, Thomas S",
    "Handicap": 24.7,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Jones, Mr. Allen L",
    "Handicap": 15.8,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Kaiser, Todd",
    "Handicap": 6.8,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Kegley, Steven F",
    "Handicap": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Kelly Jr, Charles D",
    "Handicap": 19.4,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "King, Jeff",
    "Handicap": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Kinnan, Jere F",
    "Handicap": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Knell, William L",
    "Handicap": 22.2,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Knight, Joe",
    "Handicap": 26.9,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Knoblock, Richard",
    "Handicap": 21.5,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Knudson, Mitch",
    "Handicap": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Koeritz, Robert C",
    "Handicap": 24.1,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Koslov, John",
    "Handicap": 33.4,
    "Black": 36,
    "White": 35
  },
  {
    "Name": "Kuppenbender, Gary J",
    "Handicap": 11.7,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Kurzweil, Sean E.",
    "Handicap": 15.7,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Lacho, Brent M",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Ladd, Leon D",
    "Handicap": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Lam, Willie",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Lampert, Danny",
    "Handicap": 12.3,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Landry Jr, Robert M",
    "Handicap": 25.2,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Lantz, Damon P",
    "Handicap": 6.8,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Lantz, Jack E",
    "Handicap": 21.6,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Larsen, John A",
    "Handicap": 20.5,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Lashley, Kevin",
    "Handicap": 16.6,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Lasley, Brian",
    "Handicap": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Lee, Glenn",
    "Handicap": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Leff, Ryan",
    "Handicap": 7.3,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Leibin, Cory",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Leibin, Mike",
    "Handicap": 4.2,
    "Black": 5,
    "White": 4
  },
  {
    "Name": "Leonard, Joseph",
    "Handicap": 0.1,
    "Black": 0,
    "White": 0
  },
  {
    "Name": "Lindgren, Edward",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Linklater, Scott",
    "Handicap": 2.7,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Lockett, Jake R.",
    "Handicap": 12.6,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Lofgren, James",
    "Handicap": 7.1,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Lomas, Steve",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Lopez, Dr. Alex D",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Lynch, Michael J",
    "Handicap": 27.5,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Lynch Jr, Michael P",
    "Handicap": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Lytle, Nathan",
    "Handicap": 14.5,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Major, James",
    "Handicap": 26,
    "Black": 28,
    "White": 28
  },
  {
    "Name": "Maldonado, Juan J",
    "Handicap": 15.3,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Maley, Ryan",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Marcey, Dr. David",
    "Handicap": 9.7,
    "Black": 11,
    "White": 10
  },
  {
    "Name": "Marsango, Edward A",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Martin, Edgar",
    "Handicap": 12.9,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Martinez, Mr. Andres A.",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Mason, Jeffrey T",
    "Handicap": 24.5,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "McComb, Doug",
    "Handicap": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McCurdy, Michael",
    "Handicap": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "McDade, Blaze M",
    "Handicap": 19.7,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McDade DDS, Patrick B",
    "Handicap": 19.4,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "McDonnell, Michael W",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "McKinley, Mac",
    "Handicap": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "McKinney, Dennis",
    "Handicap": 23.4,
    "Black": 25,
    "White": 25
  },
  {
    "Name": "McNulty, Benny",
    "Handicap": 25.6,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Mettam, Rocky",
    "Handicap": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Meyers, Scott S",
    "Handicap": 8,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Meyring, James",
    "Handicap": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Miller, Gordon",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Miller, Steven T",
    "Handicap": 20.2,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Miya, Kenneth",
    "Handicap": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Montgomery, Bob",
    "Handicap": 21,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Morales, Dennis R",
    "Handicap": 35.6,
    "Black": 39,
    "White": 38
  },
  {
    "Name": "Morelli, Michael J",
    "Handicap": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Morrison, Keith B",
    "Handicap": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Moss, Michael L",
    "Handicap": 27.9,
    "Black": 30,
    "White": 30
  },
  {
    "Name": "Munro, Brodie",
    "Handicap": 4.5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Munro, Jason S",
    "Handicap": 17.9,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Neale, Marc",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Neary, Robert L",
    "Handicap": 18.9,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Negrete, Rene",
    "Handicap": 36.4,
    "Black": 40,
    "White": 39
  },
  {
    "Name": "Nellis, Sam",
    "Handicap": 21.7,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Nelson, Mr Brad C",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Nelson, Robert P",
    "Handicap": 26.9,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Nelson, Tony A",
    "Handicap": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Nep, Michael",
    "Handicap": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Nestroyl, Paul F",
    "Handicap": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Neufeld, Tim",
    "Handicap": 12.7,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Noh, Mr. Thomas",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Norkin, Mr. Richard A",
    "Handicap": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Ogg, Robert C",
    "Handicap": 21.8,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Ord, Rick",
    "Handicap": 12.4,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Otoole, Kevin M",
    "Handicap": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Owens, Steve",
    "Handicap": 17.5,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Palmer, Charles F",
    "Handicap": 27.5,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Paris, Kenneth S",
    "Handicap": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Paschal, Ken W",
    "Handicap": 25.6,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Patton, Bob",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Pearson, David",
    "Handicap": 18.7,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Pederson, Grant",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Pelto, Bryan",
    "Handicap": 13,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Pett, James",
    "Handicap": 10.1,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Pizzola, Justin",
    "Handicap": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Ploesch, Wayne",
    "Handicap": 7.2,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Pollack, Christopher A",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Pollard, Daryl",
    "Handicap": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Powell, Terry W",
    "Handicap": 5.6,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Powers, James W",
    "Handicap": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Powers, Thomas E",
    "Handicap": "22.0M",
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Quinn, Michael",
    "Handicap": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Ramstead, Bob",
    "Handicap": 10.3,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Redford, Kerry D",
    "Handicap": 5.7,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Reithmayr, Matt",
    "Handicap": 25,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Reposar, Thomas M",
    "Handicap": 28.8,
    "Black": 31,
    "White": 31
  },
  {
    "Name": "Richard, Lynn",
    "Handicap": 19.1,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Richman, Andrew",
    "Handicap": 11.3,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Roberts, Brian S",
    "Handicap": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Robertson, Fred",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Robman, Louis B",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Roe, Michael",
    "Handicap": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Roessell, Jack D",
    "Handicap": 1.7,
    "Black": 2,
    "White": 2
  },
  {
    "Name": "Romero, Fred",
    "Handicap": 30.9,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Roth, Mr. Gerald",
    "Handicap": 30.2,
    "Black": 33,
    "White": 32
  },
  {
    "Name": "Ryusaki, Ryan",
    "Handicap": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Saberhagen, Bret",
    "Handicap": 4,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Saberhagen, Drew",
    "Handicap": 5.8,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Saikali, Joe",
    "Handicap": 13.2,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Salinas, Ryan",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Sallin, Marc",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Samuels, Harold F",
    "Handicap": 21.1,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Schaad, Norman W",
    "Handicap": 29.8,
    "Black": 32,
    "White": 32
  },
  {
    "Name": "Schiffner, John",
    "Handicap": 12.4,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Schittone, Victor",
    "Handicap": 9.1,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Schock, John O",
    "Handicap": 25,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Schwendimann, Mr. David F",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Sciarrino, Terry A",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Scott, Robert D",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Sherman, Frank A",
    "Handicap": 13.6,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Shmoldas, John D",
    "Handicap": 32.4,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Sikkeland, Jay",
    "Handicap": 15.2,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Simon, Shawn",
    "Handicap": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Smith, Dan",
    "Handicap": 9.4,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Smith, Daniel",
    "Handicap": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Smith, Joseph",
    "Handicap": 13.5,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Smith, Steven W",
    "Handicap": 25.8,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Spurrier, Don",
    "Handicap": 17.8,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Stevens, Bradley D",
    "Handicap": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Stilley, Larry",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Stillman, David M",
    "Handicap": 7.4,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Strom, Jeff",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Struck, Greg C",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Sultanali, Jamal",
    "Handicap": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Sylvester, Dwan V",
    "Handicap": 31.3,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Tankersley, James",
    "Handicap": 27.6,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Taylor, Lonnie R",
    "Handicap": 8.2,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Taylor, Steve",
    "Handicap": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Thomas, Robert T",
    "Handicap": 27,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Thompson, Jason",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Thompson, Ronald W",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Toland, Michael",
    "Handicap": 15.2,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Tominaga, Rory J",
    "Handicap": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Treuheit, Michael",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Tribe, Trent",
    "Handicap": 7.7,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Tushla, Todd",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Valdespino, Jack",
    "Handicap": "22.5R",
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Vallejos, Greg",
    "Handicap": 18.1,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Violin, Mark F",
    "Handicap": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Vitacco, William R",
    "Handicap": 16.6,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Warekois, Tom E",
    "Handicap": 21.9,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Wendland, Drew",
    "Handicap": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Wiksell, Wendell R",
    "Handicap": 21.7,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Williams, Eric",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Williams, George M",
    "Handicap": 13.3,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Williams, Paul R",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Willis, Lee",
    "Handicap": 16.2,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Wilson, Keith",
    "Handicap": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Wolf, David A",
    "Handicap": 13.9,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Wolf, Jerry",
    "Handicap": 34.3,
    "Black": 37,
    "White": 36
  },
  {
    "Name": "Wolinsky, Fred",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Wyman, James L",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Wynands, Danny M",
    "Handicap": 13.6,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Yamagishi, Fredrick G",
    "Handicap": 15.7,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Yoshimoto, Kevin",
    "Handicap": 17.7,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Zabel, Dane",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Zelden, Charles",
    "Handicap": 21.8,
    "Black": 24,
    "White": 23
  }
]
  constructor() {
    console.log('handi', this.members);
  }

  ngOnInit() {}

}