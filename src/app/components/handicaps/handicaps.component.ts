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
    "Handicap": 36.4,
    "Black": 40,
    "White": 39
  },
  {
    "Name": "Adams, Dennis",
    "Handicap": 22.8,
    "Black": 25,
    "White": 24
  },
  {
    "Name": "Agans, Patrick",
    "Handicap": 21.1,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Alexander, Steve",
    "Handicap": 12.7,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Alvarez, Vince",
    "Handicap": 7.5,
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
    "Handicap": 7.7,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Andrews, Greg",
    "Handicap": 22.4,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Anzures, Robert E",
    "Handicap": 13.9,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Aoyama, Yoshihiko",
    "Handicap": 11,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Archer, Mike",
    "Handicap": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Armedilla, Mr. Arnold Rivel",
    "Handicap": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Arvizu, Bruce",
    "Handicap": 25.2,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Atkinson, John E",
    "Handicap": 12.2,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Barker, Jon",
    "Handicap": 26.1,
    "Black": 28,
    "White": 28
  },
  {
    "Name": "Barrett, Luke",
    "Handicap": 16.7,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Barth, Mr. Petter",
    "Handicap": 5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Bartley, Richard",
    "Handicap": 18.5,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Basile, Luke",
    "Handicap": "+1.7",
    "Black": "+2",
    "White": "+2"
  },
  {
    "Name": "Basile, Nathan",
    "Handicap": 20.2,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Beal, Bryan R",
    "Handicap": 8.8,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Belavic, Patrick M",
    "Handicap": 7.5,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Berger, Scott V",
    "Handicap": 11.7,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Billin, Mr. John Derrick",
    "Handicap": 6.4,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Bitner, Donald P",
    "Handicap": 11.9,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Blake, Mr. David",
    "Handicap": 13.8,
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
    "Name": "Bowman, David R",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Boyert, Brad",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Bradley, Bryan",
    "Handicap": 16,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Brennan, Michael D",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Brown, Rick",
    "Handicap": 6.3,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Buckingham, Mark",
    "Handicap": 21.5,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Bugbee, Stephen D",
    "Handicap": 17.8,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Burns, Don A",
    "Handicap": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Buss, Dave H",
    "Handicap": 18,
    "Black": 20,
    "White": 19
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
    "Handicap": 16,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Canfield, Dale",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Carter, John C",
    "Handicap": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Casper, Michael",
    "Handicap": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Cassanego, Michael",
    "Handicap": 19,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Chavez, Pat",
    "Handicap": 17.3,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Chergey, Daniel M",
    "Handicap": 10,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Cheung, Adolf L",
    "Handicap": 21.1,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Christensen, Steve",
    "Handicap": 9.8,
    "Black": 11,
    "White": 10
  },
  {
    "Name": "Ciuffitelli, Larry C",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Clark, Gerald L",
    "Handicap": 26.9,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Cleaver, Mr. Edward",
    "Handicap": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Cohen, Brian M",
    "Handicap": 13.8,
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
    "Handicap": 15.6,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Cowell, Joe",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Cressman, John",
    "Handicap": 10.2,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Croick, Dustin",
    "Handicap": 14.6,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Cromwell, Rick",
    "Handicap": 4.8,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Crowell, Chris",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Crum, Eugene",
    "Handicap": 10.7,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Cunningham, Charles",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Dawson, Dave W",
    "Handicap": 8.7,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "De Mattos, Alec",
    "Handicap": 7.1,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Deese, Steven",
    "Handicap": 8,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Denning, Randy",
    "Handicap": 28.7,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Desmet, Grant",
    "Handicap": 31.4,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Devita, Vincent",
    "Handicap": 25.8,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Dewitt, Mark",
    "Handicap": 6,
    "Black": 7,
    "White": 6
  },
  {
    "Name": "Didziulis, Stephen V",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "East, Mr Ethan D",
    "Handicap": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Elkins, Rand J",
    "Handicap": 23.6,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Ellis, Jackson",
    "Handicap": 14.7,
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
    "Name": "Empey, Mark",
    "Handicap": 15.1,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Ermolovich, Dan",
    "Handicap": 8.4,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Eyermann, Peter S",
    "Handicap": 10.7,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Faherty, Michael S",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Fernandez, Ronald F",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Fero, William",
    "Handicap": 28.1,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Ferris, Larry P",
    "Handicap": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Finnegan, Mark",
    "Handicap": 32.3,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Fisher, Roger M",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Foldesi, Robert S",
    "Handicap": 24.2,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "Freeth, Joe",
    "Handicap": "12.2R",
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Gaona, Jared",
    "Handicap": 6.7,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Garrity, Thomas M",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Gaughen, Dylan",
    "Handicap": 1.1,
    "Black": 1,
    "White": 1
  },
  {
    "Name": "Giacomazzi, Mickey",
    "Handicap": 8.9,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Goldfield, Daniel",
    "Handicap": 10.3,
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
    "Handicap": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Groff, Blake",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Guhl, Bob",
    "Handicap": 26,
    "Black": 28,
    "White": 28
  },
  {
    "Name": "Haigh, Will",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Halloran, Jeff",
    "Handicap": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Hart, Richard",
    "Handicap": 32.7,
    "Black": 36,
    "White": 35
  },
  {
    "Name": "Hatfield, Gregory L",
    "Handicap": 5.9,
    "Black": 6,
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
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Helm, Chuck",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Hemphill, Richard L",
    "Handicap": 22.4,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Henderson, Phillips",
    "Handicap": 26.3,
    "Black": 29,
    "White": 28
  },
  {
    "Name": "Herbert, Edward",
    "Handicap": 24.7,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Herbert, Mark",
    "Handicap": 2.7,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Herson, Adam D",
    "Handicap": 15.6,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Hertz, Richard A",
    "Handicap": 16.7,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Hill, Benjamin",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Hilliard, Michael",
    "Handicap": 2.8,
    "Black": 3,
    "White": 3
  },
  {
    "Name": "Hindley, Mr. Hal",
    "Handicap": 20.2,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Hlinka, Warren",
    "Handicap": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Hodge, Cliff",
    "Handicap": "12.9R",
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Hofer, Jeremy R",
    "Handicap": 24.9,
    "Black": 27,
    "White": 26
  },
  {
    "Name": "Holder, Mark",
    "Handicap": 8.8,
    "Black": 10,
    "White": 9
  },
  {
    "Name": "Holmes, Danny P",
    "Handicap": 19.6,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Holt, Edwin C",
    "Handicap": 7.3,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Humphrey, William J",
    "Handicap": 18.5,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Impellizzeri, Jack",
    "Handicap": 17.7,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Jacalone, Robert",
    "Handicap": 11.6,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Jacobus, Mr Robert",
    "Handicap": 4.8,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Jaeger, Mr. Kurt",
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Jankowski, Mr. Michael",
    "Handicap": 12.2,
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
    "Name": "Johnson, Kyle",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Johnson, Rod",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Johnston, Thomas S",
    "Handicap": 26.4,
    "Black": 29,
    "White": 28
  },
  {
    "Name": "Kaiser, Todd",
    "Handicap": 5.1,
    "Black": 6,
    "White": 5
  },
  {
    "Name": "Kay, Mr. Evan D",
    "Handicap": 13.5,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Kegley, Steven F",
    "Handicap": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Kelly Jr, Charles D",
    "Handicap": 19,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "King, Jeff",
    "Handicap": 12.6,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Kinnan, Jere F",
    "Handicap": 20,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Knapp, Andrew",
    "Handicap": 13.6,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Knell, William L",
    "Handicap": 22.2,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Knight, Joe",
    "Handicap": 27.2,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Knoblock, Richard",
    "Handicap": 21,
    "Black": 23,
    "White": 22
  },
  {
    "Name": "Knudson, Mitch",
    "Handicap": 15.9,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Koeritz, Robert C",
    "Handicap": 25.1,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Koslov, John",
    "Handicap": 35.9,
    "Black": 39,
    "White": 38
  },
  {
    "Name": "Lacho, Brent M",
    "Handicap": 10.6,
    "Black": 12,
    "White": 11
  },
  {
    "Name": "Ladd, Leon D",
    "Handicap": 30.6,
    "Black": 33,
    "White": 32
  },
  {
    "Name": "Lam, Willie",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Lampert, Danny",
    "Handicap": 13.1,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Landry Jr, Robert M",
    "Handicap": 26.2,
    "Black": 29,
    "White": 28
  },
  {
    "Name": "Lantz, Damon P",
    "Handicap": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Lantz, Derek",
    "Handicap": 19,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Lantz, Jack E",
    "Handicap": 19.2,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Larsen, John A",
    "Handicap": 22,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Lashley, Kevin",
    "Handicap": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Lee, Glenn",
    "Handicap": 16.4,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Leff, Ryan",
    "Handicap": 6.4,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Leibin, Cory",
    "Handicap": 17.6,
    "Black": 19,
    "White": 19
  },
  {
    "Name": "Leibin, Mike",
    "Handicap": 5.3,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Lemasurier, Phil",
    "Handicap": 8.1,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Leonard, Joseph",
    "Handicap": 0.9,
    "Black": 1,
    "White": 1
  },
  {
    "Name": "Lindgren, Edward",
    "Handicap": 6.6,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Linklater, Scott",
    "Handicap": 1.2,
    "Black": 1,
    "White": 1
  },
  {
    "Name": "Lipman, Josh",
    "Handicap": 5.5,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Lipp, Kenneth J",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Lofgren, James",
    "Handicap": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Lopez, Dr. Alex D",
    "Handicap": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Loving, Steve",
    "Handicap": 4.2,
    "Black": 5,
    "White": 4
  },
  {
    "Name": "Lynch, Michael J",
    "Handicap": 27.5,
    "Black": 30,
    "White": 29
  },
  {
    "Name": "Lynch Jr, Michael P",
    "Handicap": 5.4,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Lytle, Nathan",
    "Handicap": 12.9,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Major, James",
    "Handicap": 27.1,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Maldonado, Juan J",
    "Handicap": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Marcey, Dr. David",
    "Handicap": 10.5,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Marsango, Edward A",
    "Handicap": 20.1,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Martin, Edgar",
    "Handicap": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Martinez, Mr. Andres A.",
    "Handicap": 17.4,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Martinez, Chad",
    "Handicap": 4.5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Mason, Jeffrey T",
    "Handicap": 24.1,
    "Black": 26,
    "White": 26
  },
  {
    "Name": "McComb, Doug",
    "Handicap": 19,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "McDade, Blaze M",
    "Handicap": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "McDade DDS, Patrick B",
    "Handicap": 16.2,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "McDonnell, Michael W",
    "Handicap": 15.1,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "McKinney, Dennis",
    "Handicap": 23.4,
    "Black": 25,
    "White": 25
  },
  {
    "Name": "McNulty, Benny",
    "Handicap": 23,
    "Black": 25,
    "White": 24
  },
  {
    "Name": "Mettam, Rocky",
    "Handicap": 13.9,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Meyer, James",
    "Handicap": 3.6,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Meyer, Ted",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Meyers, Scott S",
    "Handicap": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Meyring, James",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Miller, Gordon",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Miller, Steven T",
    "Handicap": 16.8,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Miya, Kenneth",
    "Handicap": 13.1,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Montgomery, Bob",
    "Handicap": 16.5,
    "Black": 18,
    "White": 18
  },
  {
    "Name": "Morelli, Michael J",
    "Handicap": 12.7,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Morris, Nathan",
    "Handicap": 16.9,
    "Black": 18,
    "White": 18
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
    "Handicap": "6.0R",
    "Black": 7,
    "White": 6
  },
  {
    "Name": "Munro, Jason S",
    "Handicap": 20.2,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Munsif, Mihir",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Musitano, Marc",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Neale, Marc",
    "Handicap": 17.2,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Neary, Robert L",
    "Handicap": 19.9,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Nelson, Mr Brad C",
    "Handicap": 16.3,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Nelson, Tony A",
    "Handicap": 11.8,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Nep, Michael",
    "Handicap": 5,
    "Black": 5,
    "White": 5
  },
  {
    "Name": "Nestroyl, Paul F",
    "Handicap": 13,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Neufeld, Tim",
    "Handicap": 10,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Noh, Mr. Thomas",
    "Handicap": 16.1,
    "Black": 18,
    "White": 17
  },
  {
    "Name": "Norkin, Mr. Richard A",
    "Handicap": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Nunes, Gary",
    "Handicap": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Odell, Mr. William A",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Ogg, Robert C",
    "Handicap": 25.3,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Ord, Rick",
    "Handicap": 11.1,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Otoole, Kevin M",
    "Handicap": 13.1,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Ott, Gary",
    "Handicap": 14.3,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Owens, Steve",
    "Handicap": 20.4,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Palm, Logan",
    "Handicap": 5.9,
    "Black": 6,
    "White": 6
  },
  {
    "Name": "Palmer, Charles F",
    "Handicap": 31.1,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Paris, Kenneth S",
    "Handicap": 12.5,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Paschal, Ken W",
    "Handicap": 25.5,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Patton, Bob",
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Pearson, David",
    "Handicap": 20.1,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Pelto, Bryan",
    "Handicap": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Pett, James",
    "Handicap": 10.1,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Ploesch, Wayne",
    "Handicap": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Pollack, Christopher A",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Powell, Terry W",
    "Handicap": 6.2,
    "Black": 7,
    "White": 7
  },
  {
    "Name": "Powers, James W",
    "Handicap": 14.9,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Powers, Thomas E",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Quinn, Michael",
    "Handicap": 11.5,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Ramstead, Bob",
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Read, Robert A.",
    "Handicap": 18.2,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Redford, Kerry D",
    "Handicap": 7.9,
    "Black": 9,
    "White": 8
  },
  {
    "Name": "Reithmayr, Matt",
    "Handicap": 25.1,
    "Black": 27,
    "White": 27
  },
  {
    "Name": "Reposar, Thomas M",
    "Handicap": 27,
    "Black": 29,
    "White": 29
  },
  {
    "Name": "Richard, Lynn",
    "Handicap": 21.3,
    "Black": 23,
    "White": 23
  },
  {
    "Name": "Richman, Andrew",
    "Handicap": 10.4,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Robertson, Fred",
    "Handicap": 20,
    "Black": 22,
    "White": 21
  },
  {
    "Name": "Robman, Louis B",
    "Handicap": 18.8,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Roessell, Jack D",
    "Handicap": 1.6,
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
    "Handicap": 29.8,
    "Black": 32,
    "White": 32
  },
  {
    "Name": "Ryusaki, Ryan",
    "Handicap": 7.6,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Saberhagen, Bret",
    "Handicap": 3.9,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Saberhagen, Drew",
    "Handicap": 3.6,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Sallin, Marc",
    "Handicap": 11.6,
    "Black": 13,
    "White": 12
  },
  {
    "Name": "Samuels, Harold F",
    "Handicap": 21.8,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Schaad, Norman W",
    "Handicap": 29.6,
    "Black": 32,
    "White": 31
  },
  {
    "Name": "Schiffner, John",
    "Handicap": 12.1,
    "Black": 13,
    "White": 13
  },
  {
    "Name": "Schittone, Victor",
    "Handicap": 10.9,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Schock, John O",
    "Handicap": 23.9,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Schwartz, Eric",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Schwendimann, Mr. David F",
    "Handicap": 14.7,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Sciarrino, Terry A",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Scott, Robert D",
    "Handicap": 19.7,
    "Black": 21,
    "White": 21
  },
  {
    "Name": "Sherman, Frank A",
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Shmoldas, John D",
    "Handicap": 31.2,
    "Black": 34,
    "White": 33
  },
  {
    "Name": "Sikkeland, Jay",
    "Handicap": 14.3,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Simon, Shawn",
    "Handicap": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Smith, Joseph",
    "Handicap": 12.6,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "Smith, Steven W",
    "Handicap": 25.4,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Spielmann, Burke",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Spurrier, Don",
    "Handicap": 18.7,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Stanley, Darren",
    "Handicap": 15,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Stevens, Bradley D",
    "Handicap": 8.6,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Stilley, Larry",
    "Handicap": 19.3,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Stillman, David M",
    "Handicap": 10,
    "Black": 11,
    "White": 11
  },
  {
    "Name": "Strom, Jeff",
    "Handicap": 13.4,
    "Black": 15,
    "White": 14
  },
  {
    "Name": "Struck, Greg C",
    "Handicap": 18.1,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Sullivan, Geno",
    "Handicap": 14.4,
    "Black": 16,
    "White": 15
  },
  {
    "Name": "Sultanali, Jamal",
    "Handicap": 19.2,
    "Black": 21,
    "White": 20
  },
  {
    "Name": "Sylvester, Dwan V",
    "Handicap": 32.2,
    "Black": 35,
    "White": 34
  },
  {
    "Name": "Tankersley, James",
    "Handicap": 28.3,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Taylor, Lonnie R",
    "Handicap": 7.3,
    "Black": 8,
    "White": 8
  },
  {
    "Name": "Taylor, Steve",
    "Handicap": 15.4,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Thomas, Robert T",
    "Handicap": 25.7,
    "Black": 28,
    "White": 27
  },
  {
    "Name": "Thompson, Jason",
    "Handicap": "NH",
    "Black": "NH",
    "White": "NH"
  },
  {
    "Name": "Thompson, Ronald W",
    "Handicap": 14.8,
    "Black": 16,
    "White": 16
  },
  {
    "Name": "Toland, Michael",
    "Handicap": 16,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Tominaga, Rory J",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Treuheit, Michael",
    "Handicap": 17,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Tribe, Trent",
    "Handicap": 8.4,
    "Black": 9,
    "White": 9
  },
  {
    "Name": "Tushla, Todd",
    "Handicap": 17.1,
    "Black": 19,
    "White": 18
  },
  {
    "Name": "Valdespino, Jack",
    "Handicap": 28.3,
    "Black": 31,
    "White": 30
  },
  {
    "Name": "Vallejos, Greg",
    "Handicap": 18.3,
    "Black": 20,
    "White": 19
  },
  {
    "Name": "Violin, Mark F",
    "Handicap": "22.0M",
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Vitacco, William R",
    "Handicap": 15.8,
    "Black": 17,
    "White": 17
  },
  {
    "Name": "Warekois, Tom E",
    "Handicap": 22.3,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Weinstock, Chris",
    "Handicap": 18.4,
    "Black": 20,
    "White": 20
  },
  {
    "Name": "Weiser, Kevin",
    "Handicap": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Wendland, Drew",
    "Handicap": 12.5,
    "Black": 14,
    "White": 13
  },
  {
    "Name": "White, Dave",
    "Handicap": 23.7,
    "Black": 26,
    "White": 25
  },
  {
    "Name": "Wiksell, Wendell R",
    "Handicap": 22.1,
    "Black": 24,
    "White": 23
  },
  {
    "Name": "Williams, George M",
    "Handicap": 13.1,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Williams, Paul R",
    "Handicap": 12.8,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Wilson, Keith",
    "Handicap": 3.5,
    "Black": 4,
    "White": 4
  },
  {
    "Name": "Wilson, Kemper",
    "Handicap": 22.5,
    "Black": 24,
    "White": 24
  },
  {
    "Name": "Wolf, David A",
    "Handicap": 13.8,
    "Black": 15,
    "White": 15
  },
  {
    "Name": "Wolf, Jerry",
    "Handicap": 33.4,
    "Black": 36,
    "White": 35
  },
  {
    "Name": "Wollman, John",
    "Handicap": 13.1,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Woulard, Nico",
    "Handicap": 11.4,
    "Black": 12,
    "White": 12
  },
  {
    "Name": "Wyman, James L",
    "Handicap": 20.6,
    "Black": 22,
    "White": 22
  },
  {
    "Name": "Wynands, Danny M",
    "Handicap": 12.8,
    "Black": 14,
    "White": 14
  },
  {
    "Name": "Yamagishi, Fredrick G",
    "Handicap": 15.5,
    "Black": 17,
    "White": 16
  },
  {
    "Name": "Zabel, Dane",
    "Handicap": 9.3,
    "Black": 10,
    "White": 10
  },
  {
    "Name": "Zelden, Charles",
    "Handicap": 22.9,
    "Black": 25,
    "White": 24
  }
]
  constructor() {
    console.log('handi', this.members);
  }

  ngOnInit() {}

}