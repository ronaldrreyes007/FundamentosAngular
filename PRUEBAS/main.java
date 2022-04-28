package PRUEBAS;

class main{



  public static void main(String[] args) {

    int[] myarray = {1,2,3,5,30};
    int mayor = myarray[0];

        for(int x=1; x < myarray.length; x++){
                if (myarray[x]>mayor){
                  mayor = myarray[x];
                }
        }
        System.out.println("El mayor es :"+ mayor);


}
}
