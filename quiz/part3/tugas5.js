/* Soal 5. Bintang asteriks
Problem buatlah bintang seperti berikut
hasilnya
*
**
***
****
*****
*/

let input = 5;
for (let i = 1; i <= input; i++) {
  let bintang = "";
  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
