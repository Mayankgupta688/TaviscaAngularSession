import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "updateString"
})
export default class StringReplacePipe implements PipeTransform {
    transform(value: string, charToReplace: string, replacementCharacter: string) {
        return value.replace(charToReplace, replacementCharacter)
    }
}