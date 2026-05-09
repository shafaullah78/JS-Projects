
var getInputField = document.getElementById('calc')


function btnClick(btn) {

    getInputField.value += btn


}


function equalsTo() {

    try {
        getInputField.value = eval(getInputField.value)
    }

    catch(error){

        getInputField.value = 'Error'
    }
    

}


function clrAll() {
    getInputField.value = ''
}


function clrOne() {
    getInputField.value = getInputField.value.slice(0, -1)

}



