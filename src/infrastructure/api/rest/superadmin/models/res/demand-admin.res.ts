import { ApiProperty } from '@nestjs/swagger';

export class DemandAdminRes {
  @ApiProperty({ type: Number, description: '관리자 등록 요청 pk', example: 1 })
  id: number;
  @ApiProperty({ type: Number, description: '학번', example: 208001535 })
  studentId: number;
  @ApiProperty({ type: String, description: '이름', example: '임태호' })
  name: string;
  @ApiProperty({ type: String, description: '휴대폰 번호', example: '010-0000-0000' })
  phoneNumber: string;

  constructor(id: number, studentId: number, name: string, phoneNumber: string) {
    this.id = id;
    this.studentId = studentId;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
