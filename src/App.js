import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      txtUserName : '',
      txtPassword : '',
      txtDesc: '',
      sltGender: 0,
      rdLang: 'vi',
      chkbStatus: false
    }

    // Binding action
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name] : value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      
      <div className="container mt-30">
        
        <div className="row">
          
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form demo</h3>
                </div>
                <div className="panel-body">

                  <form onSubmit={ this.onHandleSubmit }>
                    <div className="form-group">
                      <label htmlFor="">User name</label>
                      <input 
                        type="text" 
                        className="form-control"
                        name="txtUserName"
                        value={this.state.txtUserName}
                        onChange={ this.onHandleChange }/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input 
                        type="password" 
                        className="form-control"
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={ this.onHandleChange }/>
                    </div>
                    
                    <div className="form-group">
                      <label>Description</label>
                      
                      <textarea 
                        name="txtDesc"
                        value={this.state.txtDesc}
                        className="form-control"
                        rows="3"
                        onChange={ this.onHandleChange }
                      />
                      
                    </div>

                    <label>Giới tính</label>
                    <select name="sltGender" 
                      value={this.state.sltGender} 
                      className="form-control"
                      onChange={ this.onHandleChange }
                    >
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>

                    <label>Ngôn ngữ</label>
                    <div className="radio">
                      <label>
                        <input 
                        type="radio"
                        name="rdLang"
                        value="en"
                        onChange={ this.onHandleChange }
                        checked={this.state.rdLang === 'en' ? 'checked' : ''}
                      />
                        English
                      </label><br/>
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="vi"
                          onChange={ this.onHandleChange }
                          checked={this.state.rdLang === 'vi' ? 'checked' : ''}
                        />
                        Tiếng Việt
                      </label>
                    </div>

                    
                    <div className="checkbox">
                      <label>
                        <input 
                          type="checkbox"
                          name="chkbStatus"
                          value={this.state.chkbStatus}
                          checked={this.state.chkbStatus ? 'checked' : ''}
                          onChange={ this.onHandleChange }
                        />
                        Trạng thái
                      </label>
                    </div>


                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset" className="btn btn-default">Reset</button>
                  </form>
                  
                </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    );
  }
}

export default App;
