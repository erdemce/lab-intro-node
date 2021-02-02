class SortedList {

  /*
Iteration 1: constructor()
new SortedList should create a new object from the SortedList class.

The object should have two properties: items and length.

items should be an array,
length should be the number of elements in the array.
  */
  constructor() {

    this.items=[];
    this.length=0;
  }

  add(item) {

    this.items.push(item);
    this.length=this.items.length;

    if(this.length>1){
      this.items.sort((item1,item2)=>{
        return item1-item2}
        )
    }
  }

  get(pos) {

    if(pos<this.length){
      return this.items[pos]

    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length-1]
  }

  min() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    return this.items.reduce((sum,item)=>
       sum+item
    ,0)
  }

  avg() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;
