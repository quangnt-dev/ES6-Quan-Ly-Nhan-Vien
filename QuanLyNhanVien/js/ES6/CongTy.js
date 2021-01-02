class CongTy {
  constructor () {
    this.DanhSachNhanVien = new Array();
  }

  ThemNhanVien ( nhanVienMoi ) {
    // this.DanhSachNhanVien.push( nhanVienMoi );
    this.DanhSachNhanVien = [ ...this.DanhSachNhanVien, nhanVienMoi ];
  }

  TimViTriTheoMa ( maNV ) {
    for ( let vitri in this.DanhSachNhanVien ) {
      if ( this.DanhSachNhanVien[ vitri ].maNV === maNV ) {
        return vitri;
        break;
      }
    }
  }

  XoaNhanVien ( maNV ) {
    let vitri = this.TimViTriTheoMa( maNV );
    this.DanhSachNhanVien.splice( vitri, 1 );
  }

  SuaNhanVien ( nhanVien ) {
    let vitri = this.TimViTriTheoMa( nhanVien.maNV );
    this.DanhSachNhanVien[ vitri ] = nhanVien;
  }

  TimNhanVienTheoTen ( hoten ) {
    let dskq = new CongTy();
    hoten = hoten.trim().toUpperCase();

    for ( let nhanvien of this.DanhSachNhanVien ) {
      let hotenNV = nhanvien.hoTen.trim().toUpperCase();

      if ( hotenNV.search( hoten ) !== -1 ) {
        dskq.DanhSachNhanVien = [ ...dskq.DanhSachNhanVien, nhanvien ];
      }
    }
    return dskq;
  }
}
