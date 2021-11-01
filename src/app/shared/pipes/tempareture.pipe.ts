import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempareture'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number) {

          if(value && !isNaN(value)){

            switch (value) {
              case value:
                
                break;
            
              default:
                break;
            }

                //  if(unit === 'C'){
                //    var tempareature = (value - 32) / 1.8 ;
                //    return tempareature.toFixed(2);
                //  }
                //  if(unit === 'F'){
                //   var tempareature = (value * 32) + 1.8 ;
                //   return tempareature.toFixed(2);
                // }
          }
    return;
  }

}
