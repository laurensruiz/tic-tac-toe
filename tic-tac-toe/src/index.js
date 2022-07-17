import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props){
      return (
        <button 
        className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
  }
  
  class Board extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            squares: Array(9).fill(null),
            xIsNext: true,
            message: null,
        }
    }

    //handler
    handleClick(i){
        const squares = this.state.squares.slice();
        if (squares[i] !== null){
            return squares[i]
        } else{
            squares[i]= this.state.xIsNext? 'X': 'O';
        }
        
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })

        if((squares[0]==='X' && squares[1]==='X' && squares[2]==='X') || (squares[0]==='X' && squares[3]==='X' && squares[6]==='X') || (squares[3]==='X' && squares[4]==='X' && squares[5]==='X')|| (squares[6]==='X' && squares[7]==='X' && squares[8]==='X')|| (squares[1]==='X' && squares[4]==='X' && squares[7]==='X')|| (squares[2]==='X' && squares[5]==='X' && squares[8]==='X')|| (squares[0]==='X' && squares[4]==='X' && squares[8]==='X')|| (squares[2]==='X' && squares[4]==='X' && squares[6]==='X')){
            this.setState({
                message: 'X wins!'
            })
        } else if ((squares[0]==='O' && squares[1]==='O' && squares[2]==='O') || (squares[0]==='O' && squares[3]==='O' && squares[6]==='O') || (squares[3]==='O' && squares[4]==='O' && squares[5]==='O')|| (squares[6]==='O' && squares[7]==='O' && squares[8]==='O')|| (squares[1]==='O' && squares[4]==='O' && squares[7]==='O')|| (squares[2]==='O' && squares[5]==='O' && squares[8]==='O')|| (squares[0]==='O' && squares[4]==='O' && squares[8]==='O')|| (squares[2]==='O' && squares[4]==='O' && squares[6]==='O')){
            this.setState({
                message: 'O wins!'
            })
        }
    }
    renderSquare(i) {
      return <Square 
      value={this.state.squares[i]} 
      onClick={()=> this.handleClick(i)}/>;
    }
  
    render() {
      const status = 'Next player:' + (this.state.xIsNext? 'X' : 'O');

  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="message">{this.state.message}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  