const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data=data
    this.left=null
    this.right=null
  }
}
class BinarySearchTree {

  constructor(){
    this.rootData=null
  }
  root() {
    return this.rootData
  }

  add(data ) {
  const newNode=new Node(data)
  if (!this.rootData){
    this.rootData=newNode;
    return
  }
  let currentNode=this.rootData
    while(currentNode){
       if (newNode.data <currentNode.data){
         if (!currentNode.left){
           currentNode.left=newNode
           return;
         }
         currentNode=currentNode.left
       } else {
          if (!currentNode.right){
            currentNode.right=newNode
            return;
          }
         currentNode=currentNode.right
       }
    }

  }

  has(data) {
   return Boolean(this.find(data))
  }

  find( data ) {
    let node = this.rootData
    while (node) {
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        node = node.left
        continue
      }
      if (node.data < data) {
        node = node.right
      }
    }

    return null
  }

  remove(data) {
    this.rootData = this._removeNode(this.rootData, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }

      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      node.data = this._findMinNode(node.right).data;
      node.right = this._removeNode(node.right, node.data);
      return node;

  }

  _findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.rootData) return null;
    let node = this.rootData;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootData) return null;
    let node = this.rootData;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};