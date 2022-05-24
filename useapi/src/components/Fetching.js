import { myFetch } from "./myFetch";

export const Fetching = () => {
    myFetch.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );

}