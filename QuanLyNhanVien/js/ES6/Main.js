var nhanvienmoi = new NhanVien( 'abc', 'nguyen van a', 'nguyenvana@gmail.com', '12345678', '10/10/2017', 'NhanVien' );

var congty = new CongTy();

// todo: Sap Xep Nhan Vien



// todo: Chuyen Trang
const ChuyenTrang = ( idButton ) => {
  document.getElementById( idButton ).addEventListener( 'click', () => {
    let id = idButton;
    let mangTam = id.split( '_' );
    trangHienTai = mangTam[ 1 ];
  } );
  HienThiDanhSach( congty.DanhSachNhanVien );
};
