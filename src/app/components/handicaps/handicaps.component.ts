import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {
  members = [
    {
      "Name": "Abramson, Henry J",
      "H.I.": 36.4,
      "Black": 40,
      "White": 39
    },
    {
      "Name": "Adams, Dennis",
      "H.I.": 22.8,
      "Black": 25,
      "White": 24
    },
    {
      "Name": "Agans, Patrick",
      "H.I.": 21.1,
      "Black": 23,
      "White": 22
    },
    {
      "Name": "Alexander, Steve",
      "H.I.": 12.7,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "Alvarez, Vince",
      "H.I.": 7.5,
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
      "H.I.": 7.7,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Andrews, Greg",
      "H.I.": 22.4,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Anzures, Robert E",
      "H.I.": 13.9,
      "Black": 15,
      "White": 15
    },
    {
      "Name": "Aoyama, Yoshihiko",
      "H.I.": 11,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Archer, Mike",
      "H.I.": 13.8,
      "Black": 15,
      "White": 15
    },
    {
      "Name": "Armedilla, Mr. Arnold Rivel",
      "H.I.": 14.7,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Arvizu, Bruce",
      "H.I.": 25.2,
      "Black": 27,
      "White": 27
    },
    {
      "Name": "Atkinson, John E",
      "H.I.": 12.2,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Barker, Jon",
      "H.I.": 26.1,
      "Black": 28,
      "White": 28
    },
    {
      "Name": "Barrett, Luke",
      "H.I.": 16.7,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Barth, Mr. Petter",
      "H.I.": 5,
      "Black": 5,
      "White": 5
    },
    {
      "Name": "Bartley, Richard",
      "H.I.": 18.5,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Basile, Luke",
      "H.I.": "+1.7",
      "Black": "+2",
      "White": "+2"
    },
    {
      "Name": "Basile, Nathan",
      "H.I.": 20.2,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Beal, Bryan R",
      "H.I.": 8.8,
      "Black": 10,
      "White": 9
    },
    {
      "Name": "Belavic, Patrick M",
      "H.I.": 7.5,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Berger, Scott V",
      "H.I.": 11.7,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Billin, Mr. John Derrick",
      "H.I.": 6.4,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Bitner, Donald P",
      "H.I.": 11.9,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Blake, Mr. David",
      "H.I.": 13.8,
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
      "Name": "Bowman, David R",
      "H.I.": 10.9,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Boyert, Brad",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Bradley, Bryan",
      "H.I.": 16,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Brennan, Michael D",
      "H.I.": 11.1,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Brown, Rick",
      "H.I.": 6.3,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Buckingham, Mark",
      "H.I.": 21.5,
      "Black": 23,
      "White": 23
    },
    {
      "Name": "Bugbee, Stephen D",
      "H.I.": 17.8,
      "Black": 19,
      "White": 19
    },
    {
      "Name": "Burns, Don A",
      "H.I.": 15,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Buss, Dave H",
      "H.I.": 18,
      "Black": 20,
      "White": 19
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
      "H.I.": 16,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Canfield, Dale",
      "H.I.": 17.2,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Carter, John C",
      "H.I.": 22.3,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Casper, Michael",
      "H.I.": 16.1,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Cassanego, Michael",
      "H.I.": 19,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "Chavez, Pat",
      "H.I.": 17.3,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Chergey, Daniel M",
      "H.I.": 10,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Cheung, Adolf L",
      "H.I.": 21.1,
      "Black": 23,
      "White": 22
    },
    {
      "Name": "Christensen, Steve",
      "H.I.": 9.8,
      "Black": 11,
      "White": 10
    },
    {
      "Name": "Ciuffitelli, Larry C",
      "H.I.": 17.1,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Clark, Gerald L",
      "H.I.": 26.9,
      "Black": 29,
      "White": 29
    },
    {
      "Name": "Cleaver, Mr. Edward",
      "H.I.": 11.5,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Cohen, Brian M",
      "H.I.": 13.8,
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
      "H.I.": 15.6,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Cowell, Joe",
      "H.I.": 8.9,
      "Black": 10,
      "White": 9
    },
    {
      "Name": "Cressman, John",
      "H.I.": 10.2,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Croick, Dustin",
      "H.I.": 14.6,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Cromwell, Rick",
      "H.I.": 4.8,
      "Black": 5,
      "White": 5
    },
    {
      "Name": "Crowell, Chris",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Crum, Eugene",
      "H.I.": 10.7,
      "Black": 12,
      "White": 11
    },
    {
      "Name": "Cunningham, Charles",
      "H.I.": 21.3,
      "Black": 23,
      "White": 23
    },
    {
      "Name": "Dawson, Dave W",
      "H.I.": 8.7,
      "Black": 9,
      "White": 9
    },
    {
      "Name": "De Mattos, Alec",
      "H.I.": 7.1,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Deese, Steven",
      "H.I.": 8,
      "Black": 9,
      "White": 8
    },
    {
      "Name": "Denning, Randy",
      "H.I.": 28.7,
      "Black": 31,
      "White": 30
    },
    {
      "Name": "Desmet, Grant",
      "H.I.": 31.4,
      "Black": 34,
      "White": 33
    },
    {
      "Name": "Devita, Vincent",
      "H.I.": 25.8,
      "Black": 28,
      "White": 27
    },
    {
      "Name": "Dewitt, Mark",
      "H.I.": 6,
      "Black": 7,
      "White": 6
    },
    {
      "Name": "Didziulis, Stephen V",
      "H.I.": 18.8,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "East, Mr Ethan D",
      "H.I.": 10.5,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Elkins, Rand J",
      "H.I.": 23.6,
      "Black": 26,
      "White": 25
    },
    {
      "Name": "Ellis, Jackson",
      "H.I.": 14.7,
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
      "Name": "Empey, Mark",
      "H.I.": 15.1,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Ermolovich, Dan",
      "H.I.": 8.4,
      "Black": 9,
      "White": 9
    },
    {
      "Name": "Eyermann, Peter S",
      "H.I.": 10.7,
      "Black": 12,
      "White": 11
    },
    {
      "Name": "Faherty, Michael S",
      "H.I.": 10.9,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Fernandez, Ronald F",
      "H.I.": 8.9,
      "Black": 10,
      "White": 9
    },
    {
      "Name": "Fero, William",
      "H.I.": 28.1,
      "Black": 31,
      "White": 30
    },
    {
      "Name": "Ferris, Larry P",
      "H.I.": 19.6,
      "Black": 21,
      "White": 21
    },
    {
      "Name": "Finnegan, Mark",
      "H.I.": 32.3,
      "Black": 35,
      "White": 34
    },
    {
      "Name": "Fisher, Roger M",
      "H.I.": 17.2,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Foldesi, Robert S",
      "H.I.": 24.2,
      "Black": 26,
      "White": 26
    },
    {
      "Name": "Freeth, Joe",
      "H.I.": "12.2R",
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Gaona, Jared",
      "H.I.": 6.7,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Garrity, Thomas M",
      "H.I.": 15.9,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Gaughen, Dylan",
      "H.I.": 1.1,
      "Black": 1,
      "White": 1
    },
    {
      "Name": "Giacomazzi, Mickey",
      "H.I.": 8.9,
      "Black": 10,
      "White": 9
    },
    {
      "Name": "Goldfield, Daniel",
      "H.I.": 10.3,
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
      "H.I.": 12.1,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Groff, Blake",
      "H.I.": 17,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Guhl, Bob",
      "H.I.": 26,
      "Black": 28,
      "White": 28
    },
    {
      "Name": "Haigh, Will",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Halloran, Jeff",
      "H.I.": 6.2,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Hart, Richard",
      "H.I.": 32.7,
      "Black": 36,
      "White": 35
    },
    {
      "Name": "Hatfield, Gregory L",
      "H.I.": 5.9,
      "Black": 6,
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
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Helm, Chuck",
      "H.I.": 16.8,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Hemphill, Richard L",
      "H.I.": 22.4,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Henderson, Phillips",
      "H.I.": 26.3,
      "Black": 29,
      "White": 28
    },
    {
      "Name": "Herbert, Edward",
      "H.I.": 24.7,
      "Black": 27,
      "White": 26
    },
    {
      "Name": "Herbert, Mark",
      "H.I.": 2.7,
      "Black": 3,
      "White": 3
    },
    {
      "Name": "Herson, Adam D",
      "H.I.": 15.6,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Hertz, Richard A",
      "H.I.": 16.7,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Hill, Benjamin",
      "H.I.": 16.8,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Hilliard, Michael",
      "H.I.": 2.8,
      "Black": 3,
      "White": 3
    },
    {
      "Name": "Hindley, Mr. Hal",
      "H.I.": 20.2,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Hlinka, Warren",
      "H.I.": 15.5,
      "Black": 17,
      "White": 16
    },
    {
      "Name": "Hodge, Cliff",
      "H.I.": "12.9R",
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Hofer, Jeremy R",
      "H.I.": 24.9,
      "Black": 27,
      "White": 26
    },
    {
      "Name": "Holder, Mark",
      "H.I.": 8.8,
      "Black": 10,
      "White": 9
    },
    {
      "Name": "Holmes, Danny P",
      "H.I.": 19.6,
      "Black": 21,
      "White": 21
    },
    {
      "Name": "Holt, Edwin C",
      "H.I.": 7.3,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Humphrey, William J",
      "H.I.": 18.5,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Impellizzeri, Jack",
      "H.I.": 17.7,
      "Black": 19,
      "White": 19
    },
    {
      "Name": "Jacalone, Robert",
      "H.I.": 11.6,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Jacobus, Mr Robert",
      "H.I.": 4.8,
      "Black": 5,
      "White": 5
    },
    {
      "Name": "Jaeger, Mr. Kurt",
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Jankowski, Mr. Michael",
      "H.I.": 12.2,
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
      "Name": "Johnson, Kyle",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Johnson, Rod",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Johnston, Thomas S",
      "H.I.": 26.4,
      "Black": 29,
      "White": 28
    },
    {
      "Name": "Kaiser, Todd",
      "H.I.": 5.1,
      "Black": 6,
      "White": 5
    },
    {
      "Name": "Kay, Mr. Evan D",
      "H.I.": 13.5,
      "Black": 15,
      "White": 14
    },
    {
      "Name": "Kegley, Steven F",
      "H.I.": 11.4,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Kelly Jr, Charles D",
      "H.I.": 19,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "King, Jeff",
      "H.I.": 12.6,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "Kinnan, Jere F",
      "H.I.": 20,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Knapp, Andrew",
      "H.I.": 13.6,
      "Black": 15,
      "White": 14
    },
    {
      "Name": "Knell, William L",
      "H.I.": 22.2,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Knight, Joe",
      "H.I.": 27.2,
      "Black": 30,
      "White": 29
    },
    {
      "Name": "Knoblock, Richard",
      "H.I.": 21,
      "Black": 23,
      "White": 22
    },
    {
      "Name": "Knudson, Mitch",
      "H.I.": 15.9,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Koeritz, Robert C",
      "H.I.": 25.1,
      "Black": 27,
      "White": 27
    },
    {
      "Name": "Koslov, John",
      "H.I.": 35.9,
      "Black": 39,
      "White": 38
    },
    {
      "Name": "Lacho, Brent M",
      "H.I.": 10.6,
      "Black": 12,
      "White": 11
    },
    {
      "Name": "Ladd, Leon D",
      "H.I.": 30.6,
      "Black": 33,
      "White": 32
    },
    {
      "Name": "Lam, Willie",
      "H.I.": 17.6,
      "Black": 19,
      "White": 19
    },
    {
      "Name": "Lampert, Danny",
      "H.I.": 13.1,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Landry Jr, Robert M",
      "H.I.": 26.2,
      "Black": 29,
      "White": 28
    },
    {
      "Name": "Lantz, Damon P",
      "H.I.": 10.5,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Lantz, Derek",
      "H.I.": 19,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "Lantz, Jack E",
      "H.I.": 19.2,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "Larsen, John A",
      "H.I.": 22,
      "Black": 24,
      "White": 23
    },
    {
      "Name": "Lashley, Kevin",
      "H.I.": 16.4,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Lee, Glenn",
      "H.I.": 16.4,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Leff, Ryan",
      "H.I.": 6.4,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Leibin, Cory",
      "H.I.": 17.6,
      "Black": 19,
      "White": 19
    },
    {
      "Name": "Leibin, Mike",
      "H.I.": 5.3,
      "Black": 6,
      "White": 6
    },
    {
      "Name": "Lemasurier, Phil",
      "H.I.": 8.1,
      "Black": 9,
      "White": 9
    },
    {
      "Name": "Leonard, Joseph",
      "H.I.": 0.9,
      "Black": 1,
      "White": 1
    },
    {
      "Name": "Lindgren, Edward",
      "H.I.": 6.6,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Linklater, Scott",
      "H.I.": 1.2,
      "Black": 1,
      "White": 1
    },
    {
      "Name": "Lipman, Josh",
      "H.I.": 5.5,
      "Black": 6,
      "White": 6
    },
    {
      "Name": "Lipp, Kenneth J",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Lofgren, James",
      "H.I.": 7.6,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Lopez, Dr. Alex D",
      "H.I.": 16.1,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Loving, Steve",
      "H.I.": 4.2,
      "Black": 5,
      "White": 4
    },
    {
      "Name": "Lynch, Michael J",
      "H.I.": 27.5,
      "Black": 30,
      "White": 29
    },
    {
      "Name": "Lynch Jr, Michael P",
      "H.I.": 5.4,
      "Black": 6,
      "White": 6
    },
    {
      "Name": "Lytle, Nathan",
      "H.I.": 12.9,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Major, James",
      "H.I.": 27.1,
      "Black": 29,
      "White": 29
    },
    {
      "Name": "Maldonado, Juan J",
      "H.I.": 15,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Marcey, Dr. David",
      "H.I.": 10.5,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Marsango, Edward A",
      "H.I.": 20.1,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Martin, Edgar",
      "H.I.": 12.1,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Martinez, Mr. Andres A.",
      "H.I.": 17.4,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Martinez, Chad",
      "H.I.": 4.5,
      "Black": 5,
      "White": 5
    },
    {
      "Name": "Mason, Jeffrey T",
      "H.I.": 24.1,
      "Black": 26,
      "White": 26
    },
    {
      "Name": "McComb, Doug",
      "H.I.": 19,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "McDade, Blaze M",
      "H.I.": 20.6,
      "Black": 22,
      "White": 22
    },
    {
      "Name": "McDade DDS, Patrick B",
      "H.I.": 16.2,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "McDonnell, Michael W",
      "H.I.": 15.1,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "McKinney, Dennis",
      "H.I.": 23.4,
      "Black": 25,
      "White": 25
    },
    {
      "Name": "McNulty, Benny",
      "H.I.": 23,
      "Black": 25,
      "White": 24
    },
    {
      "Name": "Mettam, Rocky",
      "H.I.": 13.9,
      "Black": 15,
      "White": 15
    },
    {
      "Name": "Meyer, James",
      "H.I.": 3.6,
      "Black": 4,
      "White": 4
    },
    {
      "Name": "Meyer, Ted",
      "H.I.": 16.5,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Meyers, Scott S",
      "H.I.": 7.9,
      "Black": 9,
      "White": 8
    },
    {
      "Name": "Meyring, James",
      "H.I.": 16.8,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Miller, Gordon",
      "H.I.": 17,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Miller, Steven T",
      "H.I.": 16.8,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Miya, Kenneth",
      "H.I.": 13.1,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Montgomery, Bob",
      "H.I.": 16.5,
      "Black": 18,
      "White": 18
    },
    {
      "Name": "Morelli, Michael J",
      "H.I.": 12.7,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "Morris, Nathan",
      "H.I.": 16.9,
      "Black": 18,
      "White": 18
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
      "H.I.": "6.0R",
      "Black": 7,
      "White": 6
    },
    {
      "Name": "Munro, Jason S",
      "H.I.": 20.2,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Munsif, Mihir",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Musitano, Marc",
      "H.I.": 18.4,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Neale, Marc",
      "H.I.": 17.2,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Neary, Robert L",
      "H.I.": 19.9,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Nelson, Mr Brad C",
      "H.I.": 16.3,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Nelson, Tony A",
      "H.I.": 11.8,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Nep, Michael",
      "H.I.": 5,
      "Black": 5,
      "White": 5
    },
    {
      "Name": "Nestroyl, Paul F",
      "H.I.": 13,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Neufeld, Tim",
      "H.I.": 10,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Noh, Mr. Thomas",
      "H.I.": 16.1,
      "Black": 18,
      "White": 17
    },
    {
      "Name": "Norkin, Mr. Richard A",
      "H.I.": 14.7,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Nunes, Gary",
      "H.I.": 11.5,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Odell, Mr. William A",
      "H.I.": 17,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Ogg, Robert C",
      "H.I.": 25.3,
      "Black": 28,
      "White": 27
    },
    {
      "Name": "Ord, Rick",
      "H.I.": 11.1,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Otoole, Kevin M",
      "H.I.": 13.1,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Ott, Gary",
      "H.I.": 14.3,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Owens, Steve",
      "H.I.": 20.4,
      "Black": 22,
      "White": 22
    },
    {
      "Name": "Palm, Logan",
      "H.I.": 5.9,
      "Black": 6,
      "White": 6
    },
    {
      "Name": "Palmer, Charles F",
      "H.I.": 31.1,
      "Black": 34,
      "White": 33
    },
    {
      "Name": "Paris, Kenneth S",
      "H.I.": 12.5,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "Paschal, Ken W",
      "H.I.": 25.5,
      "Black": 28,
      "White": 27
    },
    {
      "Name": "Patton, Bob",
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Pearson, David",
      "H.I.": 20.1,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Pelto, Bryan",
      "H.I.": 10.4,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Pett, James",
      "H.I.": 10.1,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Ploesch, Wayne",
      "H.I.": 7.9,
      "Black": 9,
      "White": 8
    },
    {
      "Name": "Pollack, Christopher A",
      "H.I.": 10.9,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Powell, Terry W",
      "H.I.": 6.2,
      "Black": 7,
      "White": 7
    },
    {
      "Name": "Powers, James W",
      "H.I.": 14.9,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Powers, Thomas E",
      "H.I.": 18.4,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Quinn, Michael",
      "H.I.": 11.5,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Ramstead, Bob",
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Read, Robert A.",
      "H.I.": 18.2,
      "Black": 20,
      "White": 19
    },
    {
      "Name": "Redford, Kerry D",
      "H.I.": 7.9,
      "Black": 9,
      "White": 8
    },
    {
      "Name": "Reithmayr, Matt",
      "H.I.": 25.1,
      "Black": 27,
      "White": 27
    },
    {
      "Name": "Reposar, Thomas M",
      "H.I.": 27,
      "Black": 29,
      "White": 29
    },
    {
      "Name": "Richard, Lynn",
      "H.I.": 21.3,
      "Black": 23,
      "White": 23
    },
    {
      "Name": "Richman, Andrew",
      "H.I.": 10.4,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Robertson, Fred",
      "H.I.": 20,
      "Black": 22,
      "White": 21
    },
    {
      "Name": "Robman, Louis B",
      "H.I.": 18.8,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Roessell, Jack D",
      "H.I.": 1.6,
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
      "H.I.": 29.8,
      "Black": 32,
      "White": 32
    },
    {
      "Name": "Ryusaki, Ryan",
      "H.I.": 7.6,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Saberhagen, Bret",
      "H.I.": 3.9,
      "Black": 4,
      "White": 4
    },
    {
      "Name": "Saberhagen, Drew",
      "H.I.": 3.6,
      "Black": 4,
      "White": 4
    },
    {
      "Name": "Sallin, Marc",
      "H.I.": 11.6,
      "Black": 13,
      "White": 12
    },
    {
      "Name": "Samuels, Harold F",
      "H.I.": 21.8,
      "Black": 24,
      "White": 23
    },
    {
      "Name": "Schaad, Norman W",
      "H.I.": 29.6,
      "Black": 32,
      "White": 31
    },
    {
      "Name": "Schiffner, John",
      "H.I.": 12.1,
      "Black": 13,
      "White": 13
    },
    {
      "Name": "Schittone, Victor",
      "H.I.": 10.9,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Schock, John O",
      "H.I.": 23.9,
      "Black": 26,
      "White": 25
    },
    {
      "Name": "Schwartz, Eric",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Schwendimann, Mr. David F",
      "H.I.": 14.7,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Sciarrino, Terry A",
      "H.I.": 17,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Scott, Robert D",
      "H.I.": 19.7,
      "Black": 21,
      "White": 21
    },
    {
      "Name": "Sherman, Frank A",
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Shmoldas, John D",
      "H.I.": 31.2,
      "Black": 34,
      "White": 33
    },
    {
      "Name": "Sikkeland, Jay",
      "H.I.": 14.3,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Simon, Shawn",
      "H.I.": 11.4,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Smith, Joseph",
      "H.I.": 12.6,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "Smith, Steven W",
      "H.I.": 25.4,
      "Black": 28,
      "White": 27
    },
    {
      "Name": "Spielmann, Burke",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Spurrier, Don",
      "H.I.": 18.7,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Stanley, Darren",
      "H.I.": 15,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Stevens, Bradley D",
      "H.I.": 8.6,
      "Black": 9,
      "White": 9
    },
    {
      "Name": "Stilley, Larry",
      "H.I.": 19.3,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "Stillman, David M",
      "H.I.": 10,
      "Black": 11,
      "White": 11
    },
    {
      "Name": "Strom, Jeff",
      "H.I.": 13.4,
      "Black": 15,
      "White": 14
    },
    {
      "Name": "Struck, Greg C",
      "H.I.": 18.1,
      "Black": 20,
      "White": 19
    },
    {
      "Name": "Sullivan, Geno",
      "H.I.": 14.4,
      "Black": 16,
      "White": 15
    },
    {
      "Name": "Sultanali, Jamal",
      "H.I.": 19.2,
      "Black": 21,
      "White": 20
    },
    {
      "Name": "Sylvester, Dwan V",
      "H.I.": 32.2,
      "Black": 35,
      "White": 34
    },
    {
      "Name": "Tankersley, James",
      "H.I.": 28.3,
      "Black": 31,
      "White": 30
    },
    {
      "Name": "Taylor, Lonnie R",
      "H.I.": 7.3,
      "Black": 8,
      "White": 8
    },
    {
      "Name": "Taylor, Steve",
      "H.I.": 15.4,
      "Black": 17,
      "White": 16
    },
    {
      "Name": "Thomas, Robert T",
      "H.I.": 25.7,
      "Black": 28,
      "White": 27
    },
    {
      "Name": "Thompson, Jason",
      "H.I.": "NH",
      "Black": "NH",
      "White": "NH"
    },
    {
      "Name": "Thompson, Ronald W",
      "H.I.": 14.8,
      "Black": 16,
      "White": 16
    },
    {
      "Name": "Toland, Michael",
      "H.I.": 16,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Tominaga, Rory J",
      "H.I.": 17.1,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Treuheit, Michael",
      "H.I.": 17,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Tribe, Trent",
      "H.I.": 8.4,
      "Black": 9,
      "White": 9
    },
    {
      "Name": "Tushla, Todd",
      "H.I.": 17.1,
      "Black": 19,
      "White": 18
    },
    {
      "Name": "Valdespino, Jack",
      "H.I.": 28.3,
      "Black": 31,
      "White": 30
    },
    {
      "Name": "Vallejos, Greg",
      "H.I.": 18.3,
      "Black": 20,
      "White": 19
    },
    {
      "Name": "Violin, Mark F",
      "H.I.": "22.0M",
      "Black": 24,
      "White": 23
    },
    {
      "Name": "Vitacco, William R",
      "H.I.": 15.8,
      "Black": 17,
      "White": 17
    },
    {
      "Name": "Warekois, Tom E",
      "H.I.": 22.3,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Weinstock, Chris",
      "H.I.": 18.4,
      "Black": 20,
      "White": 20
    },
    {
      "Name": "Weiser, Kevin",
      "H.I.": 15.5,
      "Black": 17,
      "White": 16
    },
    {
      "Name": "Wendland, Drew",
      "H.I.": 12.5,
      "Black": 14,
      "White": 13
    },
    {
      "Name": "White, Dave",
      "H.I.": 23.7,
      "Black": 26,
      "White": 25
    },
    {
      "Name": "Wiksell, Wendell R",
      "H.I.": 22.1,
      "Black": 24,
      "White": 23
    },
    {
      "Name": "Williams, George M",
      "H.I.": 13.1,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Williams, Paul R",
      "H.I.": 12.8,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Wilson, Keith",
      "H.I.": 3.5,
      "Black": 4,
      "White": 4
    },
    {
      "Name": "Wilson, Kemper",
      "H.I.": 22.5,
      "Black": 24,
      "White": 24
    },
    {
      "Name": "Wolf, David A",
      "H.I.": 13.8,
      "Black": 15,
      "White": 15
    },
    {
      "Name": "Wolf, Jerry",
      "H.I.": 33.4,
      "Black": 36,
      "White": 35
    },
    {
      "Name": "Wollman, John",
      "H.I.": 13.1,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Woulard, Nico",
      "H.I.": 11.4,
      "Black": 12,
      "White": 12
    },
    {
      "Name": "Wyman, James L",
      "H.I.": 20.6,
      "Black": 22,
      "White": 22
    },
    {
      "Name": "Wynands, Danny M",
      "H.I.": 12.8,
      "Black": 14,
      "White": 14
    },
    {
      "Name": "Yamagishi, Fredrick G",
      "H.I.": 15.5,
      "Black": 17,
      "White": 16
    },
    {
      "Name": "Zabel, Dane",
      "H.I.": 9.3,
      "Black": 10,
      "White": 10
    },
    {
      "Name": "Zelden, Charles",
      "H.I.": 22.9,
      "Black": 25,
      "White": 24
    }
  ];

  constructor() {}

  ngOnInit() {}

}