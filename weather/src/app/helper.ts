
export class Helper  {

 static FarenhieghtToCalcius(value: number): string {

    let cels = (value - 32) * 5 / 9 + " °C";
    return cels
 }
}