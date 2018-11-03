import React from 'react';

const caretImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASF5ejOJZ4-iFQ7BnBgr5puBLBihumHD-dmbg-msqv35HVcRy'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'NEWEST',
      showDropDown: false,
    }
    this.showDropDown = this.showDropDown.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  showDropDown(e){
    e.preventDefault();
    this.setState({
        showDropDown: !(this.state.showDropDown)
    },
        document.addEventListener('click', this.closeMenu)
    )
  }

  closeMenu() {
    this.setState({ 
        showDropDown: false 
    },
      document.removeEventListener('click', this.closeMenu)
    );
  }

  selectOption(e){
      this.setState({
          select: e.target.value
      },
        ()=> {
            this.props.sortBySelect(this.state.select)
        })
  }


  render() {
    const style1 = {
        width: '215px',
        height: '25px',
        borderRadius: '3px',
        float: 'right',
        fontSize: '14px',
        textAlign: 'left',
        paddingLeft: '10px',
        marginRight: '115px',
    }
    const style2 = {
        width: '215px',
        height: '25px',
        borderRadius: '3px',
        textAlign: 'left',
        float: 'right',
        fontSize: '16px',
        background: 'none',
        border: 'none',
        padding: '0',
        paddingLeft: '10px',
    }

    const dropDownSquare = {
        width: '215px',
        height: '100px',
        border: 'solid',
        borderColor: '#D3D3D3',
        borderWidth: 'thin',
        borderRadius: '3px',
        float: 'right',
        fontSize: '16px',
        backgroundColor: 'white',
        boxShadow: '1px 1px #D3D3D3',
        position: 'relative',
        top: '15px',
        right: '115px',
    }

    const caretButton = {
        height: '12px',
        width: '12px',
        paddingTop: '3px',
        marginRight: '2px',
        float: 'right'
    }
    return (
        <div className='container' style={{marginRight: '20px', paddingBottom: '10px'}}>

            <div style={style1}>
                <ul>
                    <button style={style1} onClick={this.showDropDown}> SORT BY: <b>{this.state.select}</b>
                        <img type='submit' src={caretImage} style={caretButton} onClick={this.showDropDown}></img>
                    </button>

                    {
                        this.state.showDropDown ? (
                            <span className='square' style={dropDownSquare}>
                                <button style={style2} value='NEWEST' onClick={this.selectOption} >NEWEST</button>
                                <button style={style2} value='HIGHEST RATED' onClick={this.selectOption} >HIGHEST RATED</button>
                                <button style={style2} value='LOWEST RATED' onClick={this.selectOption} >LOWEST RATED</button>
                                <button style={style2} value='TOP REVIEWS' onClick={this.selectOption} >TOP REVIEWS</button>
                            </span>
                        ) : (
                            null
                        )
                    }
                </ul>
            </div>
        </div>
    ) 
  }
}

export default DropDown;