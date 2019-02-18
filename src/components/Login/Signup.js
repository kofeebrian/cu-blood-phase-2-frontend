import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

class Signup extends Component {
  render() {
    return (
      <Grid class="ui centered grid" style={{ padding: "60px" }}>
        <form class="ui form">
          <h4 class="ui dividing header">ข้อมูลส่วนตัว</h4>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>ชื่อ</label>
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div class="field">
                <label>นามสกุล</label>
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>ชื่อเล่น</label>
                <input type="text" name="nick-name" placeholder="Nickname" />
              </div>
              <div class="field">
                <label>เพศ</label>
                <select class="ui fluid dropdown">
                  <option value="M">ชาย</option>
                  <option value="F">หญิง</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="three fields">
              <div class="field">
                <label>รหัสนิสิต</label>
                <input type="text" name="student-id" placeholder="Student ID" />
              </div>
              <div class="field">
                <label>คณะ</label>
                <select class="ui fluid dropdown">
                  <option value="Med">อื่นๆ</option>
                  <option value="Med">พยาบาลศาสตร์</option>
                  <option value="Eng">วิศวกรรมศาสตร์</option>
                  <option value="Med">วิทยาศาสตร์</option>
                  <option value="Eng">พาณิชยศาสตร์และการบัญชี</option>
                  <option value="Med">เศรษฐศาสตร์</option>
                  <option value="Eng">ครุศาสตร์</option>
                  <option value="Med">อักษรศาสตร์</option>
                  <option value="Eng">นิติศาสตร์</option>
                  <option value="Med">สถาปัตยกรรมศาสตร์</option>
                  <option value="Eng">รัฐศาสตร์</option>
                  <option value="Med">ศิลปกรรมศาสตร์</option>
                  <option value="Eng">วิทยาศาสตร์การกีฬา</option>
                  <option value="Med">นิเทศศาสตร์</option>
                  <option value="Eng">แพทยศาสตร์</option>
                  <option value="Med">ทันตแพทยศาสตร์</option>
                  <option value="Eng">จิตวิทยา</option>
                  <option value="Med">เภสัชศาสตร์</option>
                  <option value="Eng">สหเวชศาสตร์</option>
                  <option value="Med">สัตวแพทยศาสตร์</option>
                  <option value="Eng">สำนักวิชาทรัพยากรการเกษตร</option>
                </select>
              </div>
              <div class="field">
                <label>ชั้นปี</label>
                <select class="ui fluid dropdown">
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

          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="Phone number"
                />
              </div>
              <div class="field">
                <label>E-mail</label>
                <input type="text" name="mail" placeholder="E-mail" />
              </div>
            </div>
          </div>

          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Line ID</label>
                <input type="text" name="line-id" placeholder="Line  ID" />
              </div>
              <div class="field">
                <label>Facebook</label>
                <input type="text" name="fb" placeholder="Facebook" />
              </div>
            </div>
          </div>

          <br />
          <h4 class="ui dividing header">ฝ่ายที่ต้องการเข้า</h4>
          <div class="field">
            <div class="two fields">
              <div class="grouped fields">
                <label for="role">ฝ่ายที่สังกัดใน Season 1:</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>กิจกรรม (Event)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ประชาสัมพันธ์ (PR)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ปฏิคม (Reception)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ทะเบียน (Registration)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ทรัพยากรบุคคล (HR)</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="role">ฝ่ายที่สังกัดใน Season 2:</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>กิจกรรม (Event)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ประชาสัมพันธ์ (PR)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ปฏิคม (Reception)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ทะเบียน (Registration)</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="role"
                      checked=""
                      tabindex="0"
                      class="hidden"
                    />
                    <label>ทรัพยากรบุคคล (HR)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <h4>
              กรุณาตรวจสอบรายละเอียดให้ครบถ้วน และการคัดเลือกสตาฟเข้าฝ่ายใดนั้น
              ขึ้นอยู่กับการพิจารณาของแต่ละฝ่าย*
            </h4>
            <div class="ui checkbox">
              <input type="checkbox" name="example" />
              <label>รับทราบ</label>
            </div>
          </div>
          <br />
          <div class="ui button" tabindex="0">
            Submit
          </div>
        </form>
      </Grid>
    );
  }
}

export default Signup;
