
export class Helper  {

 static FarenheightToCelcius(value: number): string {

    let cels = (value - 32) * 5 / 9 + " °C";
    return cels
 }
}