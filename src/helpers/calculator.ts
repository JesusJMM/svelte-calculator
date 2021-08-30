import { evaluate } from 'mathjs'
export interface buttonData {
  char: string;
  width: number;
  height: number;
}
export function getLayoutFromArray(input: string[][]): buttonData[][] {
  let out: buttonData[][] = []
  for(let i = 0; i < input.length; i++){
    let row : buttonData[] = []
    for(let j = 0; j < input[i].length; j++){
      // look to the right
      let width = 1;
      if (input[i][j +1] === input[i][j]){
        width = 2;
        j++;
      }
      // look to the bottom
      let height = 1;
      if (i+1 < input.length){
        if(input[i+1][j] === input[i][j]){
          height = 2;
        }
      }
      // look to the bottom for skip the residual tag
      if (i -1 >= 0){
        if(input[i-1][j] === input[i][j]){
          continue;
        }
      }
      row.push({char: input[i][j], width, height})                  
    }
    out.push(row)
  }
  return out
}
export const specialCharactersTable = {"*": "×", "/": "÷", "Backspace": "←", "Delete": "C", "Enter": "="}
const scapeCharacterTable = {"×": "*", "÷": "/"}

function scapeInput(input:string){
  // special scape
  // regular scape 
  const regEx = new RegExp(`[${Object.keys(scapeCharacterTable).join("")}]`, "g")
  const out = input.replace(regEx, (key) => {
    return scapeCharacterTable[key]
  })
  return out
}
export function boardKeyDownHandler(e: CustomEvent, text: string): string{
  const key = e.detail
  switch (key) {
    // case '.':
    //   if(text.indexOf(key) !== -1){
    //     // the text has an character "."
    //     return text
    //   }
    //   return text.concat(key)
    case '=':
      return String(evaluate(scapeInput(text)))
    case '←':
      return text.slice(0,text.length - 1)
    case 'C':
      return ""
    default:
      return text.concat(key).replace("××", "^")
  }
}
