class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect

        this.outputFirst = document.querySelector(".first-currently");
        this.outputSecond = document.querySelector(".second-currently");
        this.outputResult = document.querySelector(".result");
    
    }

   changeFirst(){
    this.outputFirst.textContent = firstSelect.options[firstSelect.selectedIndex].textContent
   }
   changeSecond(){
    this.outputSecond.textContent = secondSelect.options[secondSelect.selectedIndex].textContent
   }
   displayResult(result){
    this.outputResult.value = result
   }
       
}