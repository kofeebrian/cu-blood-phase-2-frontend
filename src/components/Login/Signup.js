import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      year : [1,2,3,4]
    }


  }
  Major = e => {
    //console.log(e.target.value)
    if (e.target.value === "6"){
      this.state.year = [1,2,3,4,5,6];
      console.log(this.state.year);
    }
  }

  render() {
    return (
      <Grid className="ui centered grid" textAlign='center' style={{ padding: "60px" }}>
        <form className="ui form">
          <h4 className="ui dividing header">ข้อมูลส่วนตัว</h4>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>ชื่อ</label>
                <input type="text" name="first-name" placeholder="First Name" /> 
              </div>
              <div className="field">
                <label>นามสกุล</label>
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>ชื่อเล่น</label>
                <input type="text" name="nick-name" placeholder="Nickname" />
              </div>
              <div className="field">
                <label>เพศ</label>
                <select className="ui fluid dropdown">
                  <option value="M">ชาย</option>
                  <option value="F">หญิง</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="three fields">
              <div className="field">
                <label>รหัสนิสิต</label>
                <input type="text" name="student-id" placeholder="Student ID" />
              </div>
              <div className="field">
                <label>คณะ</label>
                <select className="ui fluid dropdown" onChange = {this.Major} >
                  <option value="4" >อื่นๆ</option>
                  <option value="4">พยาบาลศาสตร์</option>
                  <option value="4">วิศวกรรมศาสตร์</option>
                  <option value="4">วิทยาศาสตร์</option>
                  <option value="4">พาณิชยศาสตร์และการบัญชี</option>
                  <option value="4">เศรษฐศาสตร์</option>
                  <option value="4">ครุศาสตร์</option>
                  <option value="4">อักษรศาสตร์</option>
                  <option value="4">นิติศาสตร์</option>
                  <option value="4">สถาปัตยกรรมศาสตร์</option>
                  <option value="4">รัฐศาสตร์</option>
                  <option value="4">ศิลปกรรมศาสตร์</option>
                  <option value="4">วิทยาศาสตร์การกีฬา</option>
                  <option value="4">นิเทศศาสตร์</option>
                  <option value="6">แพทยศาสตร์</option>
                  <option value="4">ทันตแพทยศาสตร์</option>
                  <option value="4">จิตวิทยา</option>
                  <option value="4">เภสัชศาสตร์</option>
                  <option value="4">สหเวชศาสตร์</option>
                  <option value="4">สัตวแพทยศาสตร์</option>
                  <option value="4">สำนักวิชาทรัพยากรการเกษตร</option>
                </select>
              </div>
              <div className="field" >
                <label>ชั้นปี</label>
                <select className="ui fluid dropdown">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="Phone number"
                />
              </div>
              <div className="field">
                <label>E-mail</label>
                <input type="text" name="mail" placeholder="E-mail" />
              </div>
            </div>
          </div>

          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Line ID</label>
                <input type="text" name="line-id" placeholder="Line  ID" />
              </div>
              <div className="field">
                <label>Facebook</label>
                <input type="text" name="fb" placeholder="Facebook" />
              </div>
            </div>
          </div>

          <br />
          <h4 className="ui dividing header">ฝ่ายที่ต้องการเข้า</h4>
          <div className="field">
            <div className="two fields">
              <div className="grouped fields">
                <label Htmlfor="role">ฝ่ายที่สังกัดใน Season 1:</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>กิจกรรม (Event)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ประชาสัมพันธ์ (PR)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ปฏิคม (Reception)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ทะเบียน (Registration)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ทรัพยากรบุคคล (HR)</label>
                  </div>
                </div>
              </div>

              <div className="grouped fields">
                <label Htmlfor="role">ฝ่ายที่สังกัดใน Season 2:</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>กิจกรรม (Event)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ประชาสัมพันธ์ (PR)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ปฏิคม (Reception)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ทะเบียน (Registration)</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      className="hidden"
                    />
                    <label>ทรัพยากรบุคคล (HR)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <h4>
              กรุณาตรวจสอบรายละเอียดให้ครบถ้วน และการคัดเลือกสตาฟเข้าฝ่ายใดนั้น
              ขึ้นอยู่กับการพิจารณาของแต่ละฝ่าย*
            </h4>
            <div className="ui checkbox">
              <input type="checkbox" name="example" />
              <label>รับทราบ</label>
            </div>
          </div>
          <br />
          <div className="ui button" tabindex="0" onClick={this.allcheck}>
            Submit

          </div>
        </form>
      </Grid>
    );
  }
}

export default Signup;
