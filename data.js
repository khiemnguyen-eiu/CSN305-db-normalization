/* ==========================================================================
   DATABASE NORMALIZATION INTERACTIVE LAB - DATA & TRANSLATIONS
   Continuous Schemas from 1NF → 2NF → 3NF → BCNF → 4NF
   Full schema structure displayed with Locked tables (Grey borders)
   With Anomaly Explanations (Update/Insert/Delete anomalies prevented)
   ========================================================================== */

const I18N = {
  en: {
    appTitle: "Database Normalization Lab",
    appSubtitle: "Continuous Relational Decomposition (1NF → 4NF & BCNF)",
    learningProgress: "LEARNING PROGRESS",
    progressStats: "{completed} / {total} COMPLETE · {inProgress} IN PROGRESS",
    demonstrationCases: "NORMALIZATION SCHEMAS",
    needsNormalization: "Needs Normalization",
    normalizedOk: "Normalized (OK)",
    lockedTable: "Locked (Pending {step})",
    normalizeBtn: "Normalize Table",
    normalizeTablesBtn: "Normalize Table(s)",
    resetStepBtn: "Reset Step",
    nextStepBtn: "Next Step",
    legendTitle: "Visual Indicators",
    legendGreen: "Green Border: Normalized OK",
    legendYellow: "Yellow Border: Needs Normalization",
    legendGrey: "Grey Border: Locked (Upcoming Step)",
    legendBlue: "Blue Col: Multi-valued attribute (1NF)",
    legendRed: "Red Box: Non-atomic multi-value",
    legendGreenBox: "Green Box: Fixed atomic value",
    legendKey: "Asterisk (*): Composite Primary Key",
    diagnosticNotice: "DIAGNOSTIC NOTICE",
    hoverPrompt: "Hover over any table to view diagnostic",
    hoverPromptDesc: "Move your cursor over any table to inspect its normalization compliance, functional dependencies, and required decomposition steps.",
    okTitle: "Table is Fully Compliant",
    okDesc: "This relation satisfies all constraints for this normalization stage. No anomaly or undesirable dependency detected.",
    lockedTitle: "Table Locked (Upcoming Stage)",
    lockedDesc: "This relation belongs to the schema but is scheduled for decomposition in a later normalization stage.",
    fdLabel: "Functional Dependencies / Rules:",
    anomalyLabel: "Real-World Problem Solved (Anomalies Prevented):",
    graphTitle: "Column Functional Dependency Graph",
    graphLegend: "Orange = partial dependency; green = full dependency",
    compositeKey: "Composite key",
    bothIDs: "Both IDs",
    onlySuffix: " only",
    rowsCount: "{count} rows",
    stageStatusNeeds: "Needs Normalization",
    stageStatusDone: "Step Completed",
    tabTablesLabel: "Interactive Tables",
    tabSqlLabel: "Resulting SQL Schema (DDL)",
    copySqlBtn: "Copy SQL",
    copiedSqlBtn: "Copied!",
    sqlSyntaxMode: "Standard SQL (EN)",

    // Column translations dictionary
    columns: {
      "StudentID*": "StudentID*",
      "StudentID": "StudentID",
      "StudentName": "StudentName",
      "EnrollDate": "EnrollDate",
      "EmergencyContacts": "EmergencyContacts",
      "ContactInfo*": "ContactInfo*",
      "ContactInfo": "ContactInfo",
      "CourseID*": "CourseID*",
      "CourseID": "CourseID",
      "CourseName": "CourseName",
      "CourseTitle": "CourseTitle",
      "Grade": "Grade",
      "DeptCode": "DeptCode",
      "DeptCode*": "DeptCode*",
      "DeptName": "DeptName",
      "DeptChair": "DeptChair",
      "DeptOffice": "DeptOffice",
      "CourseCode*": "CourseCode*",
      "CourseCode": "CourseCode",
      "AdvisorEmail*": "AdvisorEmail*",
      "AdvisorEmail": "AdvisorEmail",
      "FacultyID*": "FacultyID*",
      "FacultyID": "FacultyID",
      "ResearchArea*": "ResearchArea*",
      "SpokenLanguage*": "SpokenLanguage*",
      "PatientID*": "PatientID*",
      "PatientID": "PatientID",
      "PatientName": "PatientName",
      "Symptoms": "Symptoms",
      "Symptom*": "Symptom*",
      "StaffCode*": "StaffCode*",
      "StaffName": "StaffName",
      "EmergencyPhones": "EmergencyPhones",
      "Phone*": "Phone*",
      "RxID*": "RxID*",
      "MedID*": "MedID*",
      "MedID": "MedID",
      "MedName": "MedName",
      "Dosage": "Dosage",
      "TestCode*": "TestCode*",
      "TestCode": "TestCode",
      "TestName": "TestName",
      "TestResult": "TestResult",
      "ClinicID*": "ClinicID*",
      "ClinicName": "ClinicName",
      "CityPostal": "CityPostal",
      "RegionalTax": "RegionalTax",
      "DoctorID*": "DoctorID*",
      "DoctorID": "DoctorID",
      "DoctorName": "DoctorName",
      "WardID": "WardID",
      "WardID*": "WardID*",
      "WardDirector": "WardDirector",
      "ShiftTime*": "ShiftTime*",
      "ShiftTime": "ShiftTime",
      "RoomNumber": "RoomNumber",
      "RoomNumber*": "RoomNumber*",
      "SurgeryCode*": "SurgeryCode*",
      "SurgeryCode": "SurgeryCode",
      "LeadSurgeon": "LeadSurgeon",
      "LeadSurgeon*": "LeadSurgeon*",
      "Specialty*": "Specialty*",
      "Language*": "Language*",
      "EquipmentType*": "EquipmentType*",
      "VendorContract*": "VendorContract*",
      "InstructorID": "InstructorID",
      "InstructorID*": "InstructorID*",
      "InstructorName": "InstructorName",
      "OfficeLocation": "OfficeLocation",
      "Textbooks": "Textbooks",
      "Textbook*": "Textbook*",
      "Committee*": "Committee*"
    }
  },

  vi: {
    appTitle: "Phòng Thí Nghiệm Chuẩn Hóa CSDL",
    appSubtitle: "Chuỗi Phân Rã Lược Đồ Liên Tục (1NF → 4NF & BCNF)",
    learningProgress: "TIẾN ĐỘ HỌC TẬP",
    progressStats: "{completed} / {total} HOÀN THÀNH · {inProgress} ĐANG THỰC HIỆN",
    demonstrationCases: "CÁC LƯỢC ĐỒ CHUẨN HÓA",
    needsNormalization: "Cần Chuẩn Hóa",
    normalizedOk: "Đã Chuẩn Hóa (OK)",
    lockedTable: "Khóa (Chờ {step})",
    normalizeBtn: "Chuẩn Hóa Bảng",
    normalizeTablesBtn: "Chuẩn Hóa Các Bảng",
    resetStepBtn: "Thiết Lập Lại Bước",
    nextStepBtn: "Bước Kế Tiếp",
    legendTitle: "Ký Hiệu Trực Quan",
    legendGreen: "Viền Xanh Lá: Đã Đạt Chuẩn",
    legendYellow: "Viền Vàng: Cần Chuẩn Hóa",
    legendGrey: "Viền Xám: Bảng Khóa (Chờ Bước Sau)",
    legendBlue: "Cột Xanh Dương: Thuộc Tính Đa Trị (1NF)",
    legendRed: "Hộp Đỏ: Giá Trị Đa Trị Không Nguyên Tố",
    legendGreenBox: "Hộp Xanh: Giá Trị Đã Nguyên Tố Hóa",
    legendKey: "Dấu Sao (*): Khóa Chính Kết Hợp",
    diagnosticNotice: "THÔNG BÁO CHẨN ĐOÁN",
    hoverPrompt: "Di chuột lên bảng để xem chẩn đoán",
    hoverPromptDesc: "Di chuyển con trỏ qua từng bảng để kiểm tra tính tuân thủ dạng chuẩn, các phụ thuộc hàm và các bước phân rã bắt buộc.",
    okTitle: "Bảng Đã Đạt Chuẩn Đầy Đủ",
    okDesc: "Quan hệ này thỏa mãn toàn bộ các điều kiện của dạng chuẩn hiện tại. Không phát hiện bất thường hay phụ thuộc bất lợi.",
    lockedTitle: "Bảng Đang Tạm Khóa (Bước Kế Tiếp)",
    lockedDesc: "Bảng này thuộc lược đồ nhưng được lên kế hoạch chuẩn hóa ở bước sau trong quy trình.",
    fdLabel: "Phụ Thuộc Hàm / Quy Tắc:",
    anomalyLabel: "Vấn Đề Thực Tế Được Giải Quyết (Khử Dị Thường CSDL):",
    graphTitle: "Sơ Đồ Phụ Thuộc Hàm Cột",
    graphLegend: "Màu cam = phụ thuộc một phần; màu xanh lá = phụ thuộc đầy đủ",
    compositeKey: "Khóa chính kết hợp",
    bothIDs: "Cả 2 khóa",
    onlySuffix: " duy nhất",
    rowsCount: "{count} dòng",
    stageStatusNeeds: "Cần Chuẩn Hóa",
    stageStatusDone: "Đã Hoàn Thành Bước",
    tabTablesLabel: "Bảng Dữ Liệu Tương Tác",
    tabSqlLabel: "Truy Vấn Tạo Bảng SQL (DDL)",
    copySqlBtn: "Sao Chép SQL",
    copiedSqlBtn: "Đã Sao Chép!",
    sqlSyntaxMode: "Cú pháp SQL tiếng Việt (VI)",

    // Column translations dictionary
    columns: {
      "StudentID*": "MaSinhVien*",
      "StudentID": "MaSinhVien",
      "StudentName": "TenSinhVien",
      "EnrollDate": "NgayNhapHoc",
      "EmergencyContacts": "LienHeKhanCap",
      "ContactInfo*": "ThongTinLienHe*",
      "ContactInfo": "ThongTinLienHe",
      "CourseID*": "MaMonHoc*",
      "CourseID": "MaMonHoc",
      "CourseName": "TenMonHoc",
      "CourseTitle": "TenMonHoc",
      "Grade": "DiemSo",
      "DeptCode": "MaKhoa",
      "DeptCode*": "MaKhoa*",
      "DeptName": "TenKhoa",
      "DeptChair": "TruongKhoa",
      "DeptOffice": "VanPhong",
      "CourseCode*": "MaMonHoc*",
      "CourseCode": "MaMonHoc",
      "AdvisorEmail*": "EmailCoVan*",
      "AdvisorEmail": "EmailCoVan",
      "FacultyID*": "MaGiangVien*",
      "FacultyID": "MaGiangVien",
      "ResearchArea*": "LinhVucNghienCuu*",
      "SpokenLanguage*": "NgonNguGiaoTiep*",
      "PatientID*": "MaBenhNhan*",
      "PatientID": "MaBenhNhan",
      "PatientName": "TenBenhNhan",
      "Symptoms": "TrieuChung",
      "Symptom*": "TrieuChung*",
      "StaffCode*": "MaNhanVien*",
      "StaffName": "TenNhanVien",
      "EmergencyPhones": "SoDienThoaiKhanCap",
      "Phone*": "SoDienThoai*",
      "RxID*": "MaDonThuoc*",
      "MedID*": "MaThuoc*",
      "MedID": "MaThuoc",
      "MedName": "TenThuoc",
      "Dosage": "LieuLuong",
      "TestCode*": "MaXetNghiem*",
      "TestCode": "MaXetNghiem",
      "TestName": "TenXetNghiem",
      "TestResult": "KetQua",
      "ClinicID*": "MaPhongKham*",
      "ClinicName": "TenPhongKham",
      "CityPostal": "MaVung",
      "RegionalTax": "ThueVung",
      "DoctorID*": "MaBacSi*",
      "DoctorID": "MaBacSi",
      "DoctorName": "TenBacSi",
      "WardID": "MaKhoaDieuTri",
      "WardID*": "MaKhoaDieuTri*",
      "WardDirector": "TruongKhoa",
      "ShiftTime*": "CaTruc*",
      "ShiftTime": "CaTruc",
      "RoomNumber": "SoPhong",
      "RoomNumber*": "SoPhong*",
      "SurgeryCode*": "MaCaPhauThuat*",
      "SurgeryCode": "MaCaPhauThuat",
      "LeadSurgeon": "BacSiMoChinh",
      "LeadSurgeon*": "BacSiMoChinh*",
      "Specialty*": "ChuyenKhoa*",
      "Language*": "NgoaiNgu*",
      "EquipmentType*": "LoaiThietBi*",
      "VendorContract*": "HopDongCungCap*",
      "InstructorID": "MaGiangVien",
      "InstructorID*": "MaGiangVien*",
      "InstructorName": "TenGiangVien",
      "OfficeLocation": "ViTriVanPhong",
      "Textbooks": "GiaoTrinh",
      "Textbook*": "GiaoTrinh*",
      "Committee*": "HoiDong*"
    }
  }
};

/* ==========================================================================
   CASES DATA DEFINITION - CONTINUOUS SCHEMAS WITH LOCKED TABLES & ANOMALIES
   ========================================================================== */

const NORMALIZATION_CASES = {
  // =========================================================================
  // CASE 1: CONTINUOUS UNIVERSITY ACADEMIC SCHEMA
  // =========================================================================
  case1: {
    id: 1,
    titleEn: "Case 1: University Academic Schema",
    titleVi: "Trường Hợp 1: Lược Đồ Đào Tạo",
    descEn: "Unified schema decomposed continuously through 1NF, 2NF, 3NF, BCNF & 4NF",
    descVi: "Lược đồ đơn nhất được phân rã liên tục qua 1NF, 2NF, 3NF, BCNF & 4NF",
    steps: {
      "1nf": {
        stepKey: "1nf",
        nextStepKey: "2nf",
        shortTitleEn: "Atomicity & Contacts",
        shortTitleVi: "Thuộc Tính Đa Trị (HoSoSinhVien)",
        titleEn: "Step 1NF: Eliminating Repeating Contacts in StudentProfiles",
        titleVi: "Bước 1NF: Khử Thuộc Tính Liên Hệ Đa Trị Trong HoSoSinhVien",
        subtitleEn: "EmergencyContacts contains multiple phone records per cell. Click to decompose into 1NF atomic tables.",
        subtitleVi: "Cột LienHeKhanCap chứa nhiều bản ghi liên hệ trong một ô. Nhấp để phân rã đạt nguyên tố 1NF.",
        nextStepTitleEn: "1NF → 2NF: Eliminating Partial Dependencies in EnrollmentGrades",
        nextStepTitleVi: "1NF → 2NF: Khử Phụ Thuộc Một Phần Trong KetQuaHocTap",
        tables: [
          {
            id: "c1_student_profiles_unnorm",
            name: "StudentProfiles_Unnorm",
            nameVi: "HoSoSinhVien_ChuaChuan",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            problematicCol: "EmergencyContacts",
            explTitleEn: "1NF Violation: Non-Atomic EmergencyContacts",
            explTitleVi: "Vi Phạm 1NF: Cột LienHeKhanCap Đa Trị",
            explDescEn: "EmergencyContacts contains multiple phone entries in one cell. 1NF requires single, atomic values.",
            explDescVi: "Cột LienHeKhanCap chứa nhiều liên hệ phân tách bằng dấu phẩy. 1NF đòi hỏi giá trị đơn nguyên tố.",
            fdEn: "StudentID → StudentName, EnrollDate | EmergencyContacts is multi-valued",
            fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc | LienHeKhanCap là đa trị",
            problemEn: "Update Anomaly: If a student changes or adds a phone number, the whole cell string must be parsed and overwritten. Searching a phone requires slow wildcard text matching (LIKE '%0912%'). In 1NF, each contact is an independent row: adding/updating is 1 simple row operation.",
            problemVi: "Dị thường cập nhật: Nếu sinh viên đổi số điện thoại, toàn bộ chuỗi trong ô phải bị ghi đè lại. Muốn tìm kiếm số điện thoại phải dùng LIKE quét toàn bảng rất chậm. Với 1NF, mỗi số điện thoại là một dòng độc lập, chỉ cần 1 câu lệnh UPDATE đơn giản trên 1 dòng.",
            columns: ["StudentID*", "StudentName", "EnrollDate", "EmergencyContacts"],
            rows: [
              ["S101", "Alice Smith", "2024-09-01", ["Mother: 0912-333", "Father: 0988-444"]],
              ["S102", "Robert Brown", "2024-09-01", ["Brother: 0903-555", "Home: 0243-777"]],
              ["S103", "Emily Davis", "2024-09-01", ["Guardian: 0977-888"]]
            ],
            splitResults: [
              {
                id: "c1_students",
                name: "Students",
                nameVi: "SinhVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF Satisfied: Atomic Student Entity",
                explTitleVi: "Đạt 1NF: Thực Thể Sinh Viên Nguyên Tố",
                explDescEn: "Contains purely single-valued student attributes.",
                explDescVi: "Chứa các thuộc tính đơn trị nguyên tố của sinh viên.",
                fdEn: "StudentID → StudentName, EnrollDate",
                fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc",
                problemEn: "Problem Solved: Student entity data is completely atomic. Updates to personal details take exactly 1 row.",
                problemVi: "Vấn đề đã giải quyết: Thực thể sinh viên hoàn toàn nguyên tố. Cập nhật thông tin chỉ mất 1 dòng.",
                columns: ["StudentID*", "StudentName", "EnrollDate"],
                rows: [
                  ["S101", "Alice Smith", "2024-09-01"],
                  ["S102", "Robert Brown", "2024-09-01"],
                  ["S103", "Emily Davis", "2024-09-01"]
                ]
              },
              {
                id: "c1_student_contacts",
                name: "StudentContacts",
                nameVi: "LienHeSinhVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF Satisfied: Normalized Repeating Group",
                explTitleVi: "Đạt 1NF: Nhóm Lặp Đã Nguyên Tố Hóa",
                explDescEn: "Each contact is atomic in green boxes.",
                explDescVi: "Mỗi liên hệ được phân thành một dòng độc lập trong hộp xanh.",
                fdEn: "StudentID, ContactInfo → (Composite Key)",
                fdVi: "MaSinhVien, ThongTinLienHe → (Khóa kết hợp)",
                problemEn: "Problem Solved: Phone numbers are now indexable rows. Adding a contact requires 1 INSERT without string parsing.",
                problemVi: "Vấn đề đã giải quyết: Số điện thoại là các dòng độc lập có thể đánh chỉ mục (index). Thêm số chỉ mất 1 lệnh INSERT.",
                columns: ["StudentID*", "ContactInfo*"],
                rows: [
                  ["S101", "Mother: 0912-333", true],
                  ["S101", "Father: 0988-444", true],
                  ["S102", "Brother: 0903-555", true],
                  ["S102", "Home: 0243-777", true],
                  ["S103", "Guardian: 0977-888", true]
                ]
              }
            ]
          },
          {
            id: "c1_enrollment_grades_ok1nf",
            name: "EnrollmentGrades",
            nameVi: "KetQuaHocTap",
            isOk: true,
            needsNorm: false,
            explTitleEn: "1NF Compliant (Atomic Rows)",
            explTitleVi: "Đạt Chuẩn 1NF (Các Giá Trị Đều Nguyên Tố)",
            explDescEn: "All cells in EnrollmentGrades are single-valued, satisfying 1NF.",
            explDescVi: "Mọi ô dữ liệu đều là đơn trị, thỏa mãn điều kiện 1NF.",
            fdEn: "Composite key (StudentID, CourseID)",
            fdVi: "Khóa kết hợp (MaSinhVien, MaMonHoc)",
            problemEn: "Atomic in 1NF. Scheduled for partial dependency decomposition in Step 2NF.",
            problemVi: "Đã đạt nguyên tố 1NF. Sẽ được xử lý phụ thuộc một phần ở bước 2NF.",
            columns: ["StudentID*", "CourseID*", "StudentName", "CourseName", "Grade"],
            rows: [
              ["S101", "CS101", "Alice Smith", "Intro to CS", "A"],
              ["S101", "CS201", "Alice Smith", "Data Structures", "B+"],
              ["S102", "CS101", "Robert Brown", "Intro to CS", "A-"]
            ]
          },
          // Locked schema tables for future stages (Requirement 2)
          {
            id: "c1_course_departments_locked_1nf",
            name: "CourseDepartments",
            nameVi: "MonHocKhoa",
            isLocked: true,
            targetStep: "3NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 3NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 3NF)",
            explDescEn: "Belongs to the schema. Contains transitive dependencies via DeptCode to be decomposed in 3NF.",
            explDescVi: "Thuộc lược đồ đào tạo. Chứa phụ thuộc bắc cầu qua MaKhoa, sẽ được phân rã ở bước 3NF.",
            fdEn: "CourseID → DeptCode | DeptCode → DeptName, DeptChair",
            fdVi: "MaMonHoc → MaKhoa | MaKhoa → TenKhoa, TruongKhoa",
            problemEn: "Locked until Step 3NF. Normalizing it then will prevent department deletion anomalies.",
            problemVi: "Đang khóa cho đến bước 3NF. Chuẩn hóa ở bước 3NF sẽ ngăn ngừa dị thường xóa khoa.",
            columns: ["CourseID*", "CourseTitle", "DeptCode", "DeptName", "DeptChair", "DeptOffice"],
            rows: [
              ["CS101", "Intro to CS", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"],
              ["CS201", "Data Structures", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"]
            ]
          },
          {
            id: "c1_advisor_assignments_locked_1nf",
            name: "AdvisorAssignments",
            nameVi: "PhanCongCoVan",
            isLocked: true,
            targetStep: "BCNF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for BCNF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước BCNF)",
            explDescEn: "Belongs to the schema. Scheduled for BCNF decomposition because AdvisorEmail is not a superkey.",
            explDescVi: "Thuộc lược đồ đào tạo. Sẽ được phân rã ở bước BCNF vì EmailCoVan không phải siêu khóa.",
            fdEn: "StudentID, CourseCode → AdvisorEmail | AdvisorEmail → CourseCode",
            fdVi: "MaSinhVien, MaMonHoc → EmailCoVan | EmailCoVan → MaMonHoc",
            problemEn: "Locked until BCNF step.",
            problemVi: "Đang khóa cho đến bước BCNF.",
            columns: ["StudentID*", "CourseCode*", "AdvisorEmail"],
            rows: [
              ["S101", "CS101", "prof.smith@univ.edu"],
              ["S102", "CS101", "prof.smith@univ.edu"]
            ]
          },
          {
            id: "c1_faculty_expertise_locked_1nf",
            name: "FacultyExpertiseLanguages",
            nameVi: "ChuyenMonNgoaiNguGiangVien",
            isLocked: true,
            targetStep: "4NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 4NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 4NF)",
            explDescEn: "Belongs to the schema. Contains independent MVDs to be decomposed in 4NF.",
            explDescVi: "Thuộc lược đồ đào tạo. Chứa phụ thuộc đa trị độc lập, sẽ được phân rã ở bước 4NF.",
            fdEn: "FacultyID ↠ ResearchArea | FacultyID ↠ SpokenLanguage",
            fdVi: "MaGiangVien ↠ LinhVucNghienCuu | MaGiangVien ↠ NgonNguGiaoTiep",
            problemEn: "Locked until 4NF step.",
            problemVi: "Đang khóa cho đến bước 4NF.",
            columns: ["FacultyID*", "ResearchArea*", "SpokenLanguage*"],
            rows: [
              ["F-10", "Artificial Intelligence", "English"],
              ["F-10", "Database Systems", "English"]
            ]
          }
        ]
      },

      "2nf": {
        stepKey: "2nf",
        nextStepKey: "3nf",
        shortTitleEn: "Partial Dependencies",
        shortTitleVi: "Phụ Thuộc Một Phần (KetQua)",
        titleEn: "Step 2NF: Eliminating Partial Dependencies in EnrollmentGrades",
        titleVi: "Bước 2NF: Loại Bỏ Phụ Thuộc Một Phần Trong KetQuaHocTap",
        subtitleEn: "Composite key is (StudentID*, CourseID*). StudentName and CourseName depend on parts of the key. Click to normalize.",
        subtitleVi: "Khóa chính là (MaSinhVien*, MaMonHoc*). TenSinhVien và TenMonHoc chỉ phụ thuộc một phần khóa. Nhấp để phân rã 2NF.",
        nextStepTitleEn: "2NF → 3NF: Eliminating Transitive Dependencies in CourseDepartments",
        nextStepTitleVi: "2NF → 3NF: Loại Bỏ Phụ Thuộc Bắc Cầu Trong MonHocKhoa",
        tables: [
          // Tables retained from 1NF
          {
            id: "c1_students_retain_2nf",
            name: "Students",
            nameVi: "SinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Satisfies 2NF (Single Primary Key)",
            explTitleVi: "Giữ Từ Bước 1NF: Thỏa 2NF (Khóa Chính Đơn)",
            explDescEn: "Has single primary key StudentID*, so partial dependency is impossible.",
            explDescVi: "Chỉ có khóa đơn MaSinhVien*, không thể xảy ra phụ thuộc một phần.",
            fdEn: "StudentID → StudentName, EnrollDate",
            fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc",
            problemEn: "Atomic and fully dependent on StudentID.",
            problemVi: "Nguyên tố và phụ thuộc đầy đủ vào MaSinhVien.",
            columns: ["StudentID*", "StudentName", "EnrollDate"],
            rows: [
              ["S101", "Alice Smith", "2024-09-01"],
              ["S102", "Robert Brown", "2024-09-01"],
              ["S103", "Emily Davis", "2024-09-01"]
            ]
          },
          {
            id: "c1_student_contacts_retain_2nf",
            name: "StudentContacts",
            nameVi: "LienHeSinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: 2NF Compliant (All Key)",
            explTitleVi: "Giữ Từ Bước 1NF: Thỏa 2NF (Toàn Bộ Là Khóa)",
            explDescEn: "Both columns form the composite key. No non-key attribute exists to have partial dependency.",
            explDescVi: "Cả hai cột tạo thành khóa kết hợp. Không có thuộc tính không khóa nào để bị phụ thuộc một phần.",
            fdEn: "StudentID, ContactInfo → (All Key)",
            fdVi: "MaSinhVien, ThongTinLienHe → (Toàn bộ là khóa)",
            problemEn: "All key attributes: 2NF is naturally satisfied.",
            problemVi: "Mọi thuộc tính đều là khóa: 2NF được thỏa mãn tự nhiên.",
            columns: ["StudentID*", "ContactInfo*"],
            rows: [
              ["S101", "Mother: 0912-333"],
              ["S101", "Father: 0988-444"],
              ["S102", "Brother: 0903-555"]
            ]
          },
          // Active 2NF table
          {
            id: "c1_enrollment_grades",
            name: "EnrollmentGrades",
            nameVi: "KetQuaHocTap",
            isOk: false,
            needsNorm: true,
            hasGraph: true,
            graphConfig: {
              compositeKey: "StudentID, CourseID",
              compositeKeyVi: "MaSinhVien, MaMonHoc",
              attributes: [
                { name: "StudentName", nameVi: "TenSinhVien", dependsOn: "StudentID only", dependsOnVi: "Chỉ MaSinhVien", type: "partial" },
                { name: "Grade", nameVi: "DiemSo", dependsOn: "Both IDs", dependsOnVi: "Cả 2 khóa", type: "full" },
                { name: "CourseName", nameVi: "TenMonHoc", dependsOn: "CourseID only", dependsOnVi: "Chỉ MaMonHoc", type: "partial" }
              ]
            },
            partialDepCols: ["StudentName", "CourseName"],
            explTitleEn: "2NF Violation: Partial Functional Dependency",
            explTitleVi: "Vi Phạm 2NF: Phụ Thuộc Hàm Một Phần",
            explDescEn: "StudentName depends solely on StudentID, and CourseName depends solely on CourseID. 2NF requires full dependency on the entire composite key.",
            explDescVi: "TenSinhVien chỉ phụ thuộc MaSinhVien, TenMonHoc chỉ phụ thuộc MaMonHoc. 2NF yêu cầu phụ thuộc đầy đủ vào toàn bộ khóa.",
            fdEn: "StudentID → StudentName (Partial) | CourseID → CourseName (Partial) | (StudentID, CourseID) → Grade (Full)",
            fdVi: "MaSinhVien → TenSinhVien (Một phần) | MaMonHoc → TenMonHoc (Một phần) | Cả hai → DiemSo (Đầy đủ)",
            problemEn: "Update Anomaly: If Course CS101 changes its title to 'Computer Science Foundations', you must execute 100 separate UPDATE queries for 100 students! Missing even one row creates conflicting titles. Insertion Anomaly: You cannot add a new course until a student enrolls.",
            problemVi: "Dị thường cập nhật: Nếu môn CS101 đổi tên, 100 sinh viên đăng ký đòi hỏi phải chạy 100 câu lệnh UPDATE! Bỏ sót 1 dòng sẽ gây mâu thuẫn dữ liệu. Dị thường chèn: Không thể thêm môn học mới nếu chưa có sinh viên đăng ký.",
            columns: ["StudentID*", "CourseID*", "StudentName", "CourseName", "Grade"],
            rows: [
              ["S101", "CS101", "Alice Smith", "Intro to CS", "A"],
              ["S101", "CS201", "Alice Smith", "Data Structures", "B+"],
              ["S102", "CS101", "Robert Brown", "Intro to CS", "A-"]
            ],
            splitResults: [
              {
                id: "c1_courses_2nf",
                name: "Courses",
                nameVi: "MonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Course Entity",
                explTitleVi: "2NF Đạt: Thực Thể Môn Học",
                explDescEn: "CourseName depends fully on CourseID.",
                explDescVi: "TenMonHoc phụ thuộc đầy đủ vào MaMonHoc.",
                fdEn: "CourseID → CourseName",
                fdVi: "MaMonHoc → TenMonHoc",
                problemEn: "Problem Solved: CourseName is stored ONCE. Changing the course title takes exactly 1 UPDATE query instead of 100!",
                problemVi: "Vấn đề đã giải quyết: TenMonHoc chỉ lưu DUY NHẤT 1 lần trong bảng MonHoc. Đổi tên môn chỉ cần 1 lệnh UPDATE duy nhất thay vì 100 lệnh!",
                columns: ["CourseID*", "CourseName"],
                rows: [
                  ["CS101", "Intro to CS"],
                  ["CS201", "Data Structures"]
                ]
              },
              {
                id: "c1_grades_2nf",
                name: "StudentGrades",
                nameVi: "BangDiem",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Full Composite Key Relation",
                explTitleVi: "2NF Đạt: Quan Hệ Khóa Kết Hợp Đầy Đủ",
                explDescEn: "Grade requires both StudentID and CourseID.",
                explDescVi: "DiemSo phụ thuộc trọn vẹn vào cả 2 khóa.",
                fdEn: "StudentID, CourseID → Grade",
                fdVi: "MaSinhVien, MaMonHoc → DiemSo",
                problemEn: "Problem Solved: Associative grade table contains only keys and grade, with zero partial redundancy.",
                problemVi: "Vấn đề đã giải quyết: Bảng điểm chỉ lưu khóa và điểm số, hoàn toàn không còn dư thừa một phần.",
                columns: ["StudentID*", "CourseID*", "Grade"],
                rows: [
                  ["S101", "CS101", "A"],
                  ["S101", "CS201", "B+"],
                  ["S102", "CS101", "A-"]
                ]
              }
            ]
          },
          // Locked tables for 3NF, BCNF, 4NF
          {
            id: "c1_course_departments_locked_2nf",
            name: "CourseDepartments",
            nameVi: "MonHocKhoa",
            isLocked: true,
            targetStep: "3NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 3NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 3NF)",
            explDescEn: "Contains transitive dependencies via DeptCode to be decomposed in Step 3NF.",
            explDescVi: "Chứa phụ thuộc bắc cầu qua MaKhoa, sẽ được phân rã ở bước 3NF.",
            fdEn: "CourseID → DeptCode | DeptCode → DeptName, DeptChair",
            fdVi: "MaMonHoc → MaKhoa | MaKhoa → TenKhoa, TruongKhoa",
            problemEn: "Locked until Step 3NF.",
            problemVi: "Đang khóa cho đến bước 3NF.",
            columns: ["CourseID*", "CourseTitle", "DeptCode", "DeptName", "DeptChair", "DeptOffice"],
            rows: [
              ["CS101", "Intro to CS", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"],
              ["CS201", "Data Structures", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"]
            ]
          },
          {
            id: "c1_advisor_assignments_locked_2nf",
            name: "AdvisorAssignments",
            nameVi: "PhanCongCoVan",
            isLocked: true,
            targetStep: "BCNF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for BCNF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước BCNF)",
            explDescEn: "Scheduled for BCNF decomposition because AdvisorEmail is not a superkey.",
            explDescVi: "Sẽ được phân rã ở bước BCNF vì EmailCoVan không phải siêu khóa.",
            fdEn: "StudentID, CourseCode → AdvisorEmail | AdvisorEmail → CourseCode",
            fdVi: "MaSinhVien, MaMonHoc → EmailCoVan | EmailCoVan → MaMonHoc",
            problemEn: "Locked until BCNF step.",
            problemVi: "Đang khóa cho đến bước BCNF.",
            columns: ["StudentID*", "CourseCode*", "AdvisorEmail"],
            rows: [
              ["S101", "CS101", "prof.smith@univ.edu"],
              ["S102", "CS101", "prof.smith@univ.edu"]
            ]
          },
          {
            id: "c1_faculty_expertise_locked_2nf",
            name: "FacultyExpertiseLanguages",
            nameVi: "ChuyenMonNgoaiNguGiangVien",
            isLocked: true,
            targetStep: "4NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 4NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 4NF)",
            explDescEn: "Contains independent MVDs to be decomposed in 4NF.",
            explDescVi: "Chứa phụ thuộc đa trị độc lập, sẽ được phân rã ở bước 4NF.",
            fdEn: "FacultyID ↠ ResearchArea | FacultyID ↠ SpokenLanguage",
            fdVi: "MaGiangVien ↠ LinhVucNghienCuu | MaGiangVien ↠ NgonNguGiaoTiep",
            problemEn: "Locked until 4NF step.",
            problemVi: "Đang khóa cho đến bước 4NF.",
            columns: ["FacultyID*", "ResearchArea*", "SpokenLanguage*"],
            rows: [
              ["F-10", "Artificial Intelligence", "English"],
              ["F-10", "Database Systems", "English"]
            ]
          }
        ]
      },

      "3nf": {
        stepKey: "3nf",
        nextStepKey: "bcnf",
        shortTitleEn: "Transitive Dependencies",
        shortTitleVi: "Phụ Thuộc Bắc Cầu (Khoa)",
        titleEn: "Step 3NF: Eliminating Transitive Dependencies in CourseDepartments",
        titleVi: "Bước 3NF: Loại Bỏ Phụ Thuộc Bắc Cầu Trong MonHocKhoa",
        subtitleEn: "CourseID determines DeptCode, which determines DeptName and DeptChair. Click to decompose into 3NF.",
        subtitleVi: "MaMonHoc xác định MaKhoa, MaKhoa lại xác định TenKhoa và TruongKhoa. Nhấp để phân rã 3NF.",
        nextStepTitleEn: "3NF → BCNF: Eliminating Non-Superkey Determinants in AdvisorAssignments",
        nextStepTitleVi: "3NF → BCNF: Loại Bỏ Định Thức Không Phải Siêu Khóa Trong PhanCongCoVan",
        tables: [
          // Tables retained from 1NF & 2NF
          {
            id: "c1_students_retain_3nf",
            name: "Students",
            nameVi: "SinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Satisfies 3NF",
            explTitleVi: "Giữ Từ Bước 1NF: Thỏa 3NF",
            explDescEn: "No transitive dependencies present.",
            explDescVi: "Không có phụ thuộc bắc cầu.",
            fdEn: "StudentID → StudentName, EnrollDate",
            fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc",
            problemEn: "Fully normalized student master entity.",
            problemVi: "Thực thể sinh viên đã đạt chuẩn hoàn toàn.",
            columns: ["StudentID*", "StudentName", "EnrollDate"],
            rows: [
              ["S101", "Alice Smith", "2024-09-01"],
              ["S102", "Robert Brown", "2024-09-01"]
            ]
          },
          {
            id: "c1_student_contacts_retain_3nf",
            name: "StudentContacts",
            nameVi: "LienHeSinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Satisfies 3NF",
            explTitleVi: "Giữ Từ Bước 1NF: Thỏa 3NF",
            explDescEn: "Pure binary key relation.",
            explDescVi: "Quan hệ khóa nhị phân thuần túy.",
            fdEn: "StudentID, ContactInfo → (All Key)",
            fdVi: "MaSinhVien, ThongTinLienHe → (Toàn bộ là khóa)",
            problemEn: "No non-key attributes.",
            problemVi: "Không có thuộc tính không khóa.",
            columns: ["StudentID*", "ContactInfo*"],
            rows: [
              ["S101", "Mother: 0912-333"],
              ["S101", "Father: 0988-444"]
            ]
          },
          {
            id: "c1_grades_retain_3nf",
            name: "StudentGrades",
            nameVi: "BangDiem",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 2NF: Satisfies 3NF",
            explTitleVi: "Giữ Từ Bước 2NF: Thỏa 3NF",
            explDescEn: "Grade directly depends on (StudentID, CourseID).",
            explDescVi: "DiemSo phụ thuộc trực tiếp vào (MaSinhVien, MaMonHoc).",
            fdEn: "StudentID, CourseID → Grade",
            fdVi: "MaSinhVien, MaMonHoc → DiemSo",
            problemEn: "No transitive links.",
            problemVi: "Không có liên kết bắc cầu.",
            columns: ["StudentID*", "CourseID*", "Grade"],
            rows: [
              ["S101", "CS101", "A"],
              ["S101", "CS201", "B+"]
            ]
          },
          // Active 3NF table (now unlocked!)
          {
            id: "c1_course_departments",
            name: "CourseDepartments",
            nameVi: "MonHocKhoa",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            transitiveCols: ["DeptName", "DeptChair", "DeptOffice"],
            explTitleEn: "3NF Violation: Transitive Dependency via DeptCode",
            explTitleVi: "Vi Phạm 3NF: Phụ Thuộc Bắc Cầu Qua MaKhoa",
            explDescEn: "CourseID → DeptCode and DeptCode → DeptName, DeptChair, DeptOffice. Non-key attribute determines other non-key attributes.",
            explDescVi: "MaMonHoc → MaKhoa và MaKhoa → TenKhoa, TruongKhoa, VanPhong. Thuộc tính không khóa xác định các thuộc tính không khóa khác.",
            fdEn: "CourseID → DeptCode | DeptCode → DeptName, DeptChair, DeptOffice (Transitive)",
            fdVi: "MaMonHoc → MaKhoa | MaKhoa → TenKhoa, TruongKhoa, VanPhong (Bắc cầu)",
            problemEn: "Update Anomaly: If Computer Science department moves from 'Bldg A-201' to 'Bldg E-500', every course under that department must be searched and updated! Deletion Anomaly: If all CS courses are temporarily dropped, deleting those course rows unintentionally ERASES the Computer Science department and Dr. Shannon from the university database entirely!",
            problemVi: "Dị thường cập nhật & xóa: Nếu khoa chuyển văn phòng, phải sửa hàng chục dòng môn học. Nguy hiểm hơn, nếu tất cả các môn của khoa tạm dừng mở lớp, việc xóa các dòng môn học sẽ vô tình XÓA SẠCH luôn thông tin Khoa và Trưởng khoa khỏi cơ sở dữ liệu!",
            columns: ["CourseID*", "CourseTitle", "DeptCode", "DeptName", "DeptChair", "DeptOffice"],
            rows: [
              ["CS101", "Intro to CS", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"],
              ["CS201", "Data Structures", "CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"],
              ["MATH10", "Calculus I", "MATH_DEPT", "Mathematics", "Dr. Euler", "Bldg B-105"]
            ],
            splitResults: [
              {
                id: "c1_courses_clean",
                name: "CourseCatalog",
                nameVi: "DanhMucMonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Course with Foreign Key DeptCode",
                explTitleVi: "3NF Đạt: Môn Học Với Khóa Ngoại MaKhoa",
                explDescEn: "All attributes directly depend on CourseID.",
                explDescVi: "Mọi thuộc tính phụ thuộc trực tiếp vào MaMonHoc.",
                fdEn: "CourseID → CourseTitle, DeptCode",
                fdVi: "MaMonHoc → TenMonHoc, MaKhoa",
                problemEn: "Problem Solved: Courses now point to DeptCode as a foreign key. Dropping courses does not harm department records.",
                problemVi: "Vấn đề đã giải quyết: Bảng môn học liên kết MaKhoa bằng khóa ngoại. Xóa môn học không làm mất khoa.",
                columns: ["CourseID*", "CourseTitle", "DeptCode"],
                rows: [
                  ["CS101", "Intro to CS", "CS_DEPT"],
                  ["CS201", "Data Structures", "CS_DEPT"],
                  ["MATH10", "Calculus I", "MATH_DEPT"]
                ]
              },
              {
                id: "c1_departments_clean",
                name: "Departments",
                nameVi: "KhoaBoMon",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Dedicated Department Entity",
                explTitleVi: "3NF Đạt: Thực Thể Khoa Độc Lập",
                explDescEn: "Department metadata isolated without transitive duplication.",
                explDescVi: "Thông tin khoa được chuẩn hóa tại 1 bảng duy nhất.",
                fdEn: "DeptCode → DeptName, DeptChair, DeptOffice",
                fdVi: "MaKhoa → TenKhoa, TruongKhoa, VanPhong",
                problemEn: "Problem Solved: Moving a department office takes exactly 1 UPDATE query on Departments. No department deletion anomaly can occur.",
                problemVi: "Vấn đề đã giải quyết: Đổi văn phòng khoa chỉ cần 1 câu lệnh UPDATE trên bảng KhoaBoMon. Tránh hoàn toàn dị thường xóa.",
                columns: ["DeptCode*", "DeptName", "DeptChair", "DeptOffice"],
                rows: [
                  ["CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"],
                  ["MATH_DEPT", "Mathematics", "Dr. Euler", "Bldg B-105"]
                ]
              }
            ]
          },
          // Locked tables for BCNF, 4NF
          {
            id: "c1_advisor_assignments_locked_3nf",
            name: "AdvisorAssignments",
            nameVi: "PhanCongCoVan",
            isLocked: true,
            targetStep: "BCNF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for BCNF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước BCNF)",
            explDescEn: "Scheduled for BCNF decomposition in the next stage.",
            explDescVi: "Sẽ được mở khóa và phân rã ở bước kế tiếp (BCNF).",
            fdEn: "AdvisorEmail → CourseCode (AdvisorEmail is not superkey)",
            fdVi: "EmailCoVan → MaMonHoc (EmailCoVan không phải siêu khóa)",
            problemEn: "Locked until BCNF step.",
            problemVi: "Đang khóa cho đến bước BCNF.",
            columns: ["StudentID*", "CourseCode*", "AdvisorEmail"],
            rows: [
              ["S101", "CS101", "prof.smith@univ.edu"],
              ["S102", "CS101", "prof.smith@univ.edu"]
            ]
          },
          {
            id: "c1_faculty_expertise_locked_3nf",
            name: "FacultyExpertiseLanguages",
            nameVi: "ChuyenMonNgoaiNguGiangVien",
            isLocked: true,
            targetStep: "4NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 4NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 4NF)",
            explDescEn: "Scheduled for 4NF decomposition.",
            explDescVi: "Sẽ được phân rã ở bước 4NF.",
            fdEn: "FacultyID ↠ ResearchArea | FacultyID ↠ SpokenLanguage",
            fdVi: "MaGiangVien ↠ LinhVucNghienCuu | MaGiangVien ↠ NgonNguGiaoTiep",
            problemEn: "Locked until 4NF step.",
            problemVi: "Đang khóa cho đến bước 4NF.",
            columns: ["FacultyID*", "ResearchArea*", "SpokenLanguage*"],
            rows: [
              ["F-10", "Artificial Intelligence", "English"],
              ["F-10", "Database Systems", "English"]
            ]
          }
        ]
      },

      "bcnf": {
        stepKey: "bcnf",
        nextStepKey: "4nf",
        shortTitleEn: "Boyce-Codd Normal Form",
        shortTitleVi: "Chuẩn BCNF (CoVanHocTap)",
        titleEn: "Step BCNF: Boyce-Codd Normal Form (AdvisorAssignments)",
        titleVi: "Bước BCNF: Dạng Chuẩn Boyce-Codd Trong PhanCongCoVan",
        subtitleEn: "Candidate keys overlap: (StudentID, CourseCode) and (StudentID, AdvisorEmail). AdvisorEmail → CourseCode violates BCNF because AdvisorEmail is not a superkey. Click to decompose.",
        subtitleVi: "Hai khóa ứng viên giao nhau. Phụ thuộc EmailCoVan → MaMonHoc vi phạm BCNF vì EmailCoVan không phải siêu khóa. Nhấp để phân rã.",
        nextStepTitleEn: "BCNF → 4NF: Eliminating Multi-Valued Dependencies in FacultyExpertise",
        nextStepTitleVi: "BCNF → 4NF: Loại Bỏ Phụ Thuộc Đa Trị Trong ChuyenMonGiangVien",
        tables: [
          // Retained normalized tables
          {
            id: "c1_students_retain_bcnf",
            name: "Students",
            nameVi: "SinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: BCNF Compliant",
            explTitleVi: "Giữ Từ Bước 1NF: Đạt Chuẩn BCNF",
            explDescEn: "StudentID is the sole candidate key and superkey.",
            explDescVi: "MaSinhVien là khóa ứng viên và siêu khóa duy nhất.",
            fdEn: "StudentID → StudentName, EnrollDate",
            fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc",
            problemEn: "Fully normalized.",
            problemVi: "Đã chuẩn hóa hoàn toàn.",
            columns: ["StudentID*", "StudentName", "EnrollDate"],
            rows: [
              ["S101", "Alice Smith", "2024-09-01"]
            ]
          },
          {
            id: "c1_course_catalog_retain_bcnf",
            name: "CourseCatalog",
            nameVi: "DanhMucMonHoc",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 3NF: BCNF Compliant",
            explTitleVi: "Giữ Từ Bước 3NF: Đạt Chuẩn BCNF",
            explDescEn: "CourseID is the primary key and superkey.",
            explDescVi: "MaMonHoc là khóa chính và siêu khóa.",
            fdEn: "CourseID → CourseTitle, DeptCode",
            fdVi: "MaMonHoc → TenMonHoc, MaKhoa",
            problemEn: "No non-superkey determinants.",
            problemVi: "Mọi định thức đều là siêu khóa.",
            columns: ["CourseID*", "CourseTitle", "DeptCode"],
            rows: [
              ["CS101", "Intro to CS", "CS_DEPT"],
              ["CS201", "Data Structures", "CS_DEPT"]
            ]
          },
          {
            id: "c1_departments_retain_bcnf",
            name: "Departments",
            nameVi: "KhoaBoMon",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 3NF: BCNF Compliant",
            explTitleVi: "Giữ Từ Bước 3NF: Đạt Chuẩn BCNF",
            explDescEn: "DeptCode is the superkey.",
            explDescVi: "MaKhoa là siêu khóa.",
            fdEn: "DeptCode → DeptName, DeptChair, DeptOffice",
            fdVi: "MaKhoa → TenKhoa, TruongKhoa, VanPhong",
            problemEn: "Fully compliant.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["DeptCode*", "DeptName", "DeptChair", "DeptOffice"],
            rows: [
              ["CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"]
            ]
          },
          // Active BCNF table (unlocked!)
          {
            id: "c1_advisor_assignments",
            name: "AdvisorAssignments",
            nameVi: "PhanCongCoVan",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            bcnfCols: ["AdvisorEmail*"],
            explTitleEn: "BCNF Violation: Determinant is NOT a Superkey",
            explTitleVi: "Vi Phạm BCNF: Định Thức Không Phải Là Siêu Khóa",
            explDescEn: "In AdvisorEmail → CourseCode, CourseCode is a prime attribute (part of candidate key (StudentID, CourseCode)), satisfying 3NF. However, AdvisorEmail is NOT a candidate or super key, violating BCNF. BCNF strictly requires every determinant to be a superkey.",
            explDescVi: "Trong phụ thuộc EmailCoVan → MaMonHoc, MaMonHoc là thuộc tính khóa nên đã thỏa 3NF. Tuy nhiên EmailCoVan KHÔNG phải là siêu khóa, vi phạm BCNF. BCNF yêu cầu mọi định thức đều phải là siêu khóa.",
            fdEn: "StudentID, CourseCode → AdvisorEmail | AdvisorEmail → CourseCode (AdvisorEmail is not superkey!)",
            fdVi: "MaSinhVien, MaMonHoc → EmailCoVan | EmailCoVan → MaMonHoc (EmailCoVan không phải siêu khóa!)",
            problemEn: "Update Anomaly: If advisor prof.smith@univ.edu is reassigned to teach Course CS102 instead of CS101, every student record assigned to Prof. Smith must be updated (e.g. 50 students = 50 rows)! In BCNF, AdvisorCourse isolates this: updating Prof. Smith's course takes exactly 1 row.",
            problemVi: "Dị thường cập nhật: Nếu cố vấn prof.smith@univ.edu chuyển sang phụ trách môn CS102 thay vì CS101, 50 sinh viên được thầy cố vấn đều phải bị sửa dòng dữ liệu tương ứng. Với BCNF, bảng CoVanMonHoc tách riêng: việc đổi môn phụ trách chỉ cần đúng 1 câu lệnh UPDATE trên 1 dòng.",
            columns: ["StudentID*", "CourseCode*", "AdvisorEmail"],
            rows: [
              ["S101", "CS101", "prof.smith@univ.edu"],
              ["S102", "CS101", "prof.smith@univ.edu"],
              ["S103", "CS201", "prof.adams@univ.edu"],
              ["S101", "CS201", "prof.adams@univ.edu"]
            ],
            splitResults: [
              {
                id: "c1_advisor_course_bcnf",
                name: "AdvisorCourse",
                nameVi: "CoVanMonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF Satisfied: AdvisorEmail is Superkey",
                explTitleVi: "Đạt BCNF: EmailCoVan Là Siêu Khóa",
                explDescEn: "Each advisor advises exactly one course. AdvisorEmail is the primary key.",
                explDescVi: "Mỗi cố vấn phụ trách 1 môn học. EmailCoVan là khóa chính.",
                fdEn: "AdvisorEmail → CourseCode (AdvisorEmail is superkey)",
                fdVi: "EmailCoVan → MaMonHoc (EmailCoVan là siêu khóa)",
                problemEn: "Problem Solved: Changing an advisor's course assignment takes exactly 1 row update.",
                problemVi: "Vấn đề đã giải quyết: Đổi môn học phụ trách của cố vấn chỉ mất đúng 1 dòng UPDATE.",
                columns: ["AdvisorEmail*", "CourseCode"],
                rows: [
                  ["prof.smith@univ.edu", "CS101"],
                  ["prof.adams@univ.edu", "CS201"]
                ]
              },
              {
                id: "c1_student_advisor_bcnf",
                name: "StudentAdvisor",
                nameVi: "SinhVienCoVan",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF Satisfied: Clean Binary Associative Entity",
                explTitleVi: "Đạt BCNF: Thực Thể Kết Hợp Nhị Phân",
                explDescEn: "Associates students with their advisors without redundancy.",
                explDescVi: "Liên kết sinh viên với cố vấn không dư thừa.",
                fdEn: "StudentID, AdvisorEmail → (All Key)",
                fdVi: "MaSinhVien, EmailCoVan → (Toàn bộ là khóa)",
                problemEn: "Problem Solved: Pure associative entity. No functional dependencies outside of candidate keys.",
                problemVi: "Vấn đề đã giải quyết: Thực thể kết hợp thuần túy, không còn phụ thuộc ngoài khóa.",
                columns: ["StudentID*", "AdvisorEmail*"],
                rows: [
                  ["S101", "prof.smith@univ.edu"],
                  ["S102", "prof.smith@univ.edu"],
                  ["S103", "prof.adams@univ.edu"],
                  ["S101", "prof.adams@univ.edu"]
                ]
              }
            ]
          },
          // Locked 4NF table
          {
            id: "c1_faculty_expertise_locked_bcnf",
            name: "FacultyExpertiseLanguages",
            nameVi: "ChuyenMonNgoaiNguGiangVien",
            isLocked: true,
            targetStep: "4NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 4NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 4NF)",
            explDescEn: "Final step in schema normalization: independent MVDs to be separated in 4NF.",
            explDescVi: "Bước cuối cùng trong quy trình chuẩn hóa: khử phụ thuộc đa trị ở 4NF.",
            fdEn: "FacultyID ↠ ResearchArea | FacultyID ↠ SpokenLanguage",
            fdVi: "MaGiangVien ↠ LinhVucNghienCuu | MaGiangVien ↠ NgonNguGiaoTiep",
            problemEn: "Locked until 4NF step.",
            problemVi: "Đang khóa cho đến bước 4NF.",
            columns: ["FacultyID*", "ResearchArea*", "SpokenLanguage*"],
            rows: [
              ["F-10", "Artificial Intelligence", "English"],
              ["F-10", "Database Systems", "English"]
            ]
          }
        ]
      },

      "4nf": {
        stepKey: "4nf",
        nextStepKey: null,
        shortTitleEn: "Multi-Valued Dependencies",
        shortTitleVi: "Phụ Thuộc Đa Trị (ChuyenMon)",
        titleEn: "Step 4NF: Eliminating Multi-Valued Dependencies in FacultyExpertise",
        titleVi: "Bước 4NF: Khử Phụ Thuộc Đa Trị Trong ChuyenMonGiangVien",
        subtitleEn: "FacultyID ↠ ResearchArea and FacultyID ↠ SpokenLanguage are independent 1-to-many relationships. Click to decompose into 4NF.",
        subtitleVi: "MaGiangVien ↠ LinhVucNghienCuu và MaGiangVien ↠ NgonNguGiaoTiep độc lập nhau. Nhấp để phân rã 4NF.",
        nextStepTitleEn: "University Academic Schema Fully Normalized to 4NF!",
        nextStepTitleVi: "Lược Đồ Đào Tạo Đại Học Đã Hoàn Toàn Đạt Chuẩn 4NF!",
        tables: [
          // Retained normalized tables across all previous steps
          {
            id: "c1_students_retain_4nf",
            name: "Students",
            nameVi: "SinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Fully Normalized",
            explTitleVi: "Giữ Từ Bước 1NF: Hoàn Toàn Đạt Chuẩn",
            explDescEn: "Fully compliant through 4NF.",
            explDescVi: "Thỏa mãn đầy đủ đến 4NF.",
            fdEn: "StudentID → StudentName, EnrollDate",
            fdVi: "MaSinhVien → TenSinhVien, NgayNhapHoc",
            problemEn: "Fully normalized.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["StudentID*", "StudentName", "EnrollDate"],
            rows: [
              ["S101", "Alice Smith", "2024-09-01"]
            ]
          },
          {
            id: "c1_student_contacts_retain_4nf",
            name: "StudentContacts",
            nameVi: "LienHeSinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Fully Normalized",
            explTitleVi: "Giữ Từ Bước 1NF: Hoàn Toàn Đạt Chuẩn",
            explDescEn: "Atomic discrete records.",
            explDescVi: "Bản ghi nguyên tố độc lập.",
            fdEn: "StudentID, ContactInfo → (All Key)",
            fdVi: "MaSinhVien, ThongTinLienHe → (Toàn bộ là khóa)",
            problemEn: "Fully normalized.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["StudentID*", "ContactInfo*"],
            rows: [
              ["S101", "Mother: 0912-333"]
            ]
          },
          {
            id: "c1_course_catalog_retain_4nf",
            name: "CourseCatalog",
            nameVi: "DanhMucMonHoc",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 3NF: Fully Normalized",
            explTitleVi: "Giữ Từ Bước 3NF: Hoàn Toàn Đạt Chuẩn",
            explDescEn: "Direct key dependency.",
            explDescVi: "Phụ thuộc trực tiếp vào khóa.",
            fdEn: "CourseID → CourseTitle, DeptCode",
            fdVi: "MaMonHoc → TenMonHoc, MaKhoa",
            problemEn: "Fully normalized.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["CourseID*", "CourseTitle", "DeptCode"],
            rows: [
              ["CS101", "Intro to CS", "CS_DEPT"]
            ]
          },
          {
            id: "c1_departments_retain_4nf",
            name: "Departments",
            nameVi: "KhoaBoMon",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 3NF: Fully Normalized",
            explTitleVi: "Giữ Từ Bước 3NF: Hoàn Toàn Đạt Chuẩn",
            explDescEn: "Single row updates for department metadata.",
            explDescVi: "Cập nhật thông tin khoa trong 1 dòng duy nhất.",
            fdEn: "DeptCode → DeptName, DeptChair, DeptOffice",
            fdVi: "MaKhoa → TenKhoa, TruongKhoa, VanPhong",
            problemEn: "Fully normalized.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["DeptCode*", "DeptName", "DeptChair", "DeptOffice"],
            rows: [
              ["CS_DEPT", "Computer Science", "Dr. Shannon", "Bldg A-201"]
            ]
          },
          {
            id: "c1_advisor_course_retain_4nf",
            name: "AdvisorCourse",
            nameVi: "CoVanMonHoc",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from BCNF: Fully Normalized",
            explTitleVi: "Giữ Từ Bước BCNF: Hoàn Toàn Đạt Chuẩn",
            explDescEn: "Advisor is superkey.",
            explDescVi: "Cố vấn là siêu khóa.",
            fdEn: "AdvisorEmail → CourseCode",
            fdVi: "EmailCoVan → MaMonHoc",
            problemEn: "Fully normalized.",
            problemVi: "Đã đạt chuẩn hoàn toàn.",
            columns: ["AdvisorEmail*", "CourseCode"],
            rows: [
              ["prof.smith@univ.edu", "CS101"]
            ]
          },
          // Active 4NF table (now unlocked!)
          {
            id: "c1_faculty_expertise",
            name: "FacultyExpertiseLanguages",
            nameVi: "ChuyenMonNgoaiNguGiangVien",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            mvdCols: ["ResearchArea*", "SpokenLanguage*"],
            explTitleEn: "4NF Violation: Independent Multi-Valued Dependencies (MVD)",
            explTitleVi: "Vi Phạm 4NF: Phụ Thuộc Đa Trị Độc Lập (MVD)",
            explDescEn: "FacultyID ↠ ResearchArea and FacultyID ↠ SpokenLanguage independently. Storing them together causes Cartesian duplication.",
            explDescVi: "MaGiangVien ↠ LinhVucNghienCuu và MaGiangVien ↠ NgonNguGiaoTiep độc lập. Lưu chung gây nhân tích Descartes.",
            fdEn: "FacultyID ↠ ResearchArea | FacultyID ↠ SpokenLanguage (Independent MVDs)",
            fdVi: "MaGiangVien ↠ LinhVucNghienCuu | MaGiangVien ↠ NgonNguGiaoTiep (MVD độc lập)",
            problemEn: "Cartesian Tuple Explosion: A professor with 4 research areas and 3 spoken languages produces 4 × 3 = 12 redundant rows! If they learn a 4th language, you must insert 4 brand new rows (one paired with every existing research area). In 4NF, adding a language requires inserting exactly 1 row into FacultyLanguages.",
            problemVi: "Bùng nổ tích Descartes & Dị thường thêm: Giảng viên có 4 hướng nghiên cứu và biết 3 ngoại ngữ sẽ tạo ra 4 × 3 = 12 dòng! Thêm 1 ngoại ngữ mới bắt buộc phải chèn thêm 4 dòng mới (ghép với từng hướng nghiên cứu). Với 4NF, quan hệ nhị phân tách độc lập: thêm ngoại ngữ chỉ cần chèn đúng 1 dòng duy nhất vào NgoaiNguGiangVien.",
            columns: ["FacultyID*", "ResearchArea*", "SpokenLanguage*"],
            rows: [
              ["F-10", "Artificial Intelligence", "English"],
              ["F-10", "Artificial Intelligence", "Vietnamese"],
              ["F-10", "Database Systems", "English"],
              ["F-10", "Database Systems", "Vietnamese"]
            ],
            splitResults: [
              {
                id: "c1_faculty_research",
                name: "FacultyResearch",
                nameVi: "NghienCuuGiangVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation for Research Areas",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân Lĩnh Vực Nghiên Cứu",
                explDescEn: "Stores faculty research interests without Cartesian product.",
                explDescVi: "Lưu lĩnh vực nghiên cứu của giảng viên, không còn nhân tích Descartes.",
                fdEn: "FacultyID ↠ ResearchArea",
                fdVi: "MaGiangVien ↠ LinhVucNghienCuu",
                problemEn: "Problem Solved: Zero Cartesian duplication. Adding research areas takes 1 row insert.",
                problemVi: "Vấn đề đã giải quyết: Không còn nhân chéo tích Descartes. Thêm hướng nghiên cứu chỉ mất 1 dòng.",
                columns: ["FacultyID*", "ResearchArea*"],
                rows: [
                  ["F-10", "Artificial Intelligence"],
                  ["F-10", "Database Systems"]
                ]
              },
              {
                id: "c1_faculty_languages",
                name: "FacultyLanguages",
                nameVi: "NgoaiNguGiangVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation for Spoken Languages",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân Ngoại Ngữ",
                explDescEn: "Stores faculty spoken languages independently.",
                explDescVi: "Lưu ngoại ngữ giao tiếp của giảng viên độc lập.",
                fdEn: "FacultyID ↠ SpokenLanguage",
                fdVi: "MaGiangVien ↠ NgonNguGiaoTiep",
                problemEn: "Problem Solved: Adding a language takes 1 row insert without affecting research interests.",
                problemVi: "Vấn đề đã giải quyết: Thêm ngoại ngữ chỉ mất 1 dòng chèn, không ảnh hưởng đến lĩnh vực nghiên cứu.",
                columns: ["FacultyID*", "SpokenLanguage*"],
                rows: [
                  ["F-10", "English"],
                  ["F-10", "Vietnamese"]
                ]
              }
            ]
          }
        ]
      }
    }
  },

  // =========================================================================
  // CASE 2: DUAL-TABLE HEALTHCARE ENTERPRISE SCHEMA
  // =========================================================================
  case2: {
    id: 2,
    titleEn: "Case 2: Healthcare Enterprise Schema",
    titleVi: "Trường Hợp 2: Lược Đồ Bệnh Viện",
    descEn: "2 tables normalized at each step within a unified clinical database",
    descVi: "Chuẩn hóa 2 bảng ở mỗi bước trong lược đồ y tế thống nhất",
    steps: {
      "1nf": {
        stepKey: "1nf",
        nextStepKey: "2nf",
        shortTitleEn: "Patients & Staff Intake",
        shortTitleVi: "Bệnh Nhân & Nhân Viên (1NF)",
        titleEn: "Step 1NF: Dual Non-Atomic Tables (Patients & Staff Contacts)",
        titleVi: "Bước 1NF: Hai Bảng Chứa Giá Trị Không Nguyên Tố",
        subtitleEn: "PatientIntake and StaffContacts contain repeating comma-separated lists. Click each to normalize.",
        subtitleVi: "TiepNhanBenhNhan và LienHeNhanVien chứa danh sách lặp. Nhấp vào từng bảng để chuẩn hóa.",
        nextStepTitleEn: "1NF → 2NF: Eliminating Partial Dependencies (RxDetails & LabOrders)",
        nextStepTitleVi: "1NF → 2NF: Khử Phụ Thuộc Một Phần (ChiTietDonThuoc & DonXetNghiem)",
        tables: [
          {
            id: "c2_patient_intake",
            name: "PatientIntake",
            nameVi: "TiepNhanBenhNhan",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            problematicCol: "Symptoms",
            explTitleEn: "1NF Issue: Repeating Symptoms",
            explTitleVi: "Vấn Đề 1NF: Triệu Chứng Lặp Trong Ô",
            explDescEn: "Symptoms column contains comma-separated values in individual cells.",
            explDescVi: "Cột TrieuChung chứa nhiều giá trị phân cách bằng dấu phẩy.",
            fdEn: "PatientID → PatientName | Symptoms is multi-valued",
            fdVi: "MaBenhNhan → TenBenhNhan | TrieuChung là đa trị",
            problemEn: "Update Anomaly: Editing patient symptoms requires string manipulation. Searching for 'Fever' requires slow wildcard table scans.",
            problemVi: "Dị thường cập nhật: Sửa triệu chứng bệnh nhân đòi hỏi xử lý chuỗi. Tìm kiếm triệu chứng phải quét toàn bảng.",
            columns: ["PatientID*", "PatientName", "Symptoms"],
            rows: [
              ["P-11", "James Wilson", ["Fever", "Cough"]],
              ["P-12", "Olivia Taylor", ["Headache", "Dizziness"]]
            ],
            splitResults: [
              {
                id: "c2_patients_clean",
                name: "Patients",
                nameVi: "BenhNhan",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF OK: Atomic Patient Relation",
                explTitleVi: "1NF Đạt: Bảng Bệnh Nhân Nguyên Tố",
                explDescEn: "Atomic patient records.",
                explDescVi: "Hồ sơ bệnh nhân nguyên tố.",
                fdEn: "PatientID → PatientName",
                fdVi: "MaBenhNhan → TenBenhNhan",
                problemEn: "Patient demographics isolated in single row.",
                problemVi: "Hồ sơ bệnh nhân lưu 1 dòng duy nhất.",
                columns: ["PatientID*", "PatientName"],
                rows: [
                  ["P-11", "James Wilson"],
                  ["P-12", "Olivia Taylor"]
                ]
              },
              {
                id: "c2_patient_symptoms",
                name: "PatientSymptoms",
                nameVi: "TrieuChungBenhNhan",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF OK: Atomic Symptoms",
                explTitleVi: "1NF Đạt: Triệu Chứng Đã Phân Dòng",
                explDescEn: "Atomic rows in green boxes.",
                explDescVi: "Mỗi triệu chứng được đóng khung xanh nguyên tố.",
                fdEn: "PatientID, Symptom → (Composite Key)",
                fdVi: "MaBenhNhan, TrieuChung → (Khóa kết hợp)",
                problemEn: "Adding/removing symptoms takes 1 row insert/delete.",
                problemVi: "Thêm/xóa triệu chứng chỉ mất 1 dòng chèn/xóa.",
                columns: ["PatientID*", "Symptom*"],
                rows: [
                  ["P-11", "Fever", true],
                  ["P-11", "Cough", true],
                  ["P-12", "Headache", true],
                  ["P-12", "Dizziness", true]
                ]
              }
            ]
          },
          {
            id: "c2_staff_contacts",
            name: "StaffContacts",
            nameVi: "LienHeNhanVien",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            problematicCol: "EmergencyPhones",
            explTitleEn: "1NF Issue: Repeating Phone Numbers",
            explTitleVi: "Vấn Đề 1NF: Nhiều Số Điện Thoại Trong Ô",
            explDescEn: "EmergencyPhones stores multiple contact numbers in single cells.",
            explDescVi: "SoDienThoaiKhanCap lưu nhiều số liên hệ trong 1 ô.",
            fdEn: "StaffCode → StaffName | EmergencyPhones is multi-valued",
            fdVi: "MaNhanVien → TenNhanVien | SoDienThoaiKhanCap là đa trị",
            problemEn: "Update Anomaly: Updating emergency numbers requires rewriting the cell text.",
            problemVi: "Dị thường cập nhật: Đổi số điện thoại phải viết đè lại toàn bộ nội dung ô.",
            columns: ["StaffCode*", "StaffName", "EmergencyPhones"],
            rows: [
              ["ST-01", "Nurse Kelly", ["0912-111-222", "0988-333-444"]],
              ["ST-02", "Tech Davis", ["0903-555-666"]]
            ],
            splitResults: [
              {
                id: "c2_staff_clean",
                name: "Staff",
                nameVi: "NhanVienYTe",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF OK: Atomic Staff Relation",
                explTitleVi: "1NF Đạt: Bảng Nhân Viên Nguyên Tố",
                explDescEn: "Single-valued staff records.",
                explDescVi: "Thông tin nhân viên đơn trị.",
                fdEn: "StaffCode → StaffName",
                fdVi: "MaNhanVien → TenNhanVien",
                problemEn: "Staff profiles stored cleanly.",
                problemVi: "Hồ sơ nhân viên lưu trữ chuẩn xác.",
                columns: ["StaffCode*", "StaffName"],
                rows: [
                  ["ST-01", "Nurse Kelly"],
                  ["ST-02", "Tech Davis"]
                ]
              },
              {
                id: "c2_staff_phones",
                name: "StaffEmergencyPhones",
                nameVi: "DienThoaiKhanCapNV",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF OK: Atomic Phone Numbers",
                explTitleVi: "1NF Đạt: Số Điện Thoại Đã Phân Dòng",
                explDescEn: "Discrete phone numbers in green boxes.",
                explDescVi: "Số điện thoại nguyên tố trong hộp xanh.",
                fdEn: "StaffCode, Phone → (Composite Key)",
                fdVi: "MaNhanVien, SoDienThoai → (Khóa kết hợp)",
                problemEn: "Each contact number is an independent row.",
                problemVi: "Mỗi số điện thoại là một dòng độc lập.",
                columns: ["StaffCode*", "Phone*"],
                rows: [
                  ["ST-01", "0912-111-222", true],
                  ["ST-01", "0988-333-444", true],
                  ["ST-02", "0903-555-666", true]
                ]
              }
            ]
          },
          // Locked tables for future 2NF, 3NF, BCNF, 4NF (Requirement 2)
          {
            id: "c2_rx_details_locked_1nf",
            name: "PrescriptionDetails",
            nameVi: "ChiTietDonThuoc",
            isLocked: true,
            targetStep: "2NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 2NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 2NF)",
            explDescEn: "Scheduled for 2NF partial dependency decomposition.",
            explDescVi: "Chờ phân rã phụ thuộc một phần ở bước 2NF.",
            fdEn: "MedID → MedName",
            fdVi: "MaThuoc → TenThuoc",
            problemEn: "Locked until 2NF.",
            problemVi: "Đang khóa cho đến bước 2NF.",
            columns: ["RxID*", "MedID*", "MedName", "Dosage"],
            rows: [["RX-101", "MED-01", "Amoxicillin 500mg", "1 tab 3x/day"]]
          },
          {
            id: "c2_clinic_branches_locked_1nf",
            name: "ClinicBranches",
            nameVi: "ChiNhanhPhongKham",
            isLocked: true,
            targetStep: "3NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 3NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 3NF)",
            explDescEn: "Scheduled for 3NF transitive dependency decomposition.",
            explDescVi: "Chờ khử phụ thuộc bắc cầu ở bước 3NF.",
            fdEn: "ClinicID → CityPostal → RegionalTax",
            fdVi: "MaPhongKham → MaVung → ThueVung",
            problemEn: "Locked until 3NF.",
            problemVi: "Đang khóa cho đến bước 3NF.",
            columns: ["ClinicID*", "ClinicName", "CityPostal", "RegionalTax"],
            rows: [["CLN-1", "Central Hospital Clinic", "POST-70000", "8.5%"]]
          }
        ]
      },

      "2nf": {
        stepKey: "2nf",
        nextStepKey: "3nf",
        shortTitleEn: "RxDetails & Lab Orders",
        shortTitleVi: "Đơn Thuốc & Xét Nghiệm (2NF)",
        titleEn: "Step 2NF: Dual Partial Dependency Tables (RxDetails & LabOrders)",
        titleVi: "Bước 2NF: Hai Bảng Phụ Thuộc Một Phần (ChiTietDonThuoc & DonXetNghiem)",
        subtitleEn: "MedName and TestName depend on only part of their composite keys. Hover for graph and click to normalize.",
        subtitleVi: "TenThuoc và TenXetNghiem chỉ phụ thuộc một phần khóa. Di chuột để xem đồ thị và nhấp để chuẩn hóa.",
        nextStepTitleEn: "2NF → 3NF: Eliminating Transitive Dependencies (Clinics & DoctorDepts)",
        nextStepTitleVi: "2NF → 3NF: Khử Phụ Thuộc Bắc Cầu (PhongKham & KhoaDieuTri)",
        tables: [
          // Tables retained from 1NF
          {
            id: "c2_patients_retain_2nf",
            name: "Patients",
            nameVi: "BenhNhan",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Satisfies 2NF",
            explTitleVi: "Giữ Từ Bước 1NF: Thỏa 2NF",
            explDescEn: "Patient master table.",
            explDescVi: "Bảng danh mục bệnh nhân.",
            fdEn: "PatientID → PatientName",
            fdVi: "MaBenhNhan → TenBenhNhan",
            problemEn: "Single key, no partial dependencies.",
            problemVi: "Khóa đơn, không có phụ thuộc một phần.",
            columns: ["PatientID*", "PatientName"],
            rows: [["P-11", "James Wilson"]]
          },
          // Active 2NF tables
          {
            id: "c2_rx_details",
            name: "PrescriptionDetails",
            nameVi: "ChiTietDonThuoc",
            isOk: false,
            needsNorm: true,
            hasGraph: true,
            graphConfig: {
              compositeKey: "RxID, MedID",
              compositeKeyVi: "MaDonThuoc, MaThuoc",
              attributes: [
                { name: "MedName", nameVi: "TenThuoc", dependsOn: "MedID only", dependsOnVi: "Chỉ MaThuoc", type: "partial" },
                { name: "Dosage", nameVi: "LieuLuong", dependsOn: "Both IDs", dependsOnVi: "Cả 2 khóa", type: "full" },
                { name: "UnitMg", nameVi: "HamLuong", dependsOn: "MedID only", dependsOnVi: "Chỉ MaThuoc", type: "partial" }
              ]
            },
            partialDepCols: ["MedName"],
            explTitleEn: "2NF Issue in PrescriptionDetails",
            explTitleVi: "Vấn Đề 2NF Trong ChiTietDonThuoc",
            explDescEn: "MedName depends solely on MedID, not full composite key (RxID, MedID).",
            explDescVi: "TenThuoc chỉ phụ thuộc vào MaThuoc, không phụ thuộc vào toàn bộ khóa.",
            fdEn: "MedID → MedName (Partial) | (RxID, MedID) → Dosage (Full)",
            fdVi: "MaThuoc → TenThuoc (Một phần) | (MaDonThuoc, MaThuoc) → LieuLuong (Đầy đủ)",
            problemEn: "Update Anomaly: Changing a medicine's trade name requires updating 500 prescription records! In 2NF, MedName is stored in Medicines: updating takes 1 row.",
            problemVi: "Dị thường cập nhật: Đổi tên thương mại của thuốc đòi hỏi cập nhật 500 dòng đơn thuốc! Với 2NF, tên thuốc chỉ lưu trong bảng Thuoc: sửa đổi chỉ mất 1 dòng.",
            columns: ["RxID*", "MedID*", "MedName", "Dosage"],
            rows: [
              ["RX-101", "MED-01", "Amoxicillin 500mg", "1 tab 3x/day"],
              ["RX-101", "MED-02", "Paracetamol 500mg", "1 tab as needed"],
              ["RX-102", "MED-01", "Amoxicillin 500mg", "1 tab 2x/day"]
            ],
            splitResults: [
              {
                id: "c2_medicines_clean",
                name: "Medicines",
                nameVi: "Thuoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Medicine Master Table",
                explTitleVi: "2NF Đạt: Bảng Danh Mục Thuốc",
                explDescEn: "MedName fully depends on MedID.",
                explDescVi: "TenThuoc phụ thuộc đầy đủ vào MaThuoc.",
                fdEn: "MedID → MedName",
                fdVi: "MaThuoc → TenThuoc",
                problemEn: "Problem Solved: 1 row update for drug name changes.",
                problemVi: "Vấn đề đã giải quyết: Đổi tên thuốc chỉ mất 1 dòng duy nhất.",
                columns: ["MedID*", "MedName"],
                rows: [
                  ["MED-01", "Amoxicillin 500mg"],
                  ["MED-02", "Paracetamol 500mg"]
                ]
              },
              {
                id: "c2_rx_items_clean",
                name: "PrescriptionItems",
                nameVi: "MucDonThuoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Full Dependency Dosage",
                explTitleVi: "2NF Đạt: Phụ Thuộc Khóa Đầy Đủ",
                explDescEn: "Dosage requires both RxID and MedID.",
                explDescVi: "LieuLuong phụ thuộc cả 2 khóa.",
                fdEn: "RxID, MedID → Dosage",
                fdVi: "MaDonThuoc, MaThuoc → LieuLuong",
                problemEn: "Clean associative relation.",
                problemVi: "Quan hệ kết hợp chuẩn xác.",
                columns: ["RxID*", "MedID*", "Dosage"],
                rows: [
                  ["RX-101", "MED-01", "1 tab 3x/day"],
                  ["RX-101", "MED-02", "1 tab as needed"]
                ]
              }
            ]
          },
          {
            id: "c2_lab_orders",
            name: "LabOrders",
            nameVi: "DonXetNghiem",
            isOk: false,
            needsNorm: true,
            hasGraph: true,
            graphConfig: {
              compositeKey: "PatientID, TestCode",
              compositeKeyVi: "MaBenhNhan, MaXetNghiem",
              attributes: [
                { name: "TestName", nameVi: "TenXetNghiem", dependsOn: "TestCode only", dependsOnVi: "Chỉ MaXetNghiem", type: "partial" },
                { name: "TestResult", nameVi: "KetQua", dependsOn: "Both IDs", dependsOnVi: "Cả 2 khóa", type: "full" },
                { name: "NormalRange", nameVi: "ChiSoChuan", dependsOn: "TestCode only", dependsOnVi: "Chỉ MaXetNghiem", type: "partial" }
              ]
            },
            partialDepCols: ["TestName"],
            explTitleEn: "2NF Issue in LabOrders",
            explTitleVi: "Vấn Đề 2NF Trong DonXetNghiem",
            explDescEn: "TestName depends solely on TestCode, violating 2NF.",
            explDescVi: "TenXetNghiem chỉ phụ thuộc vào MaXetNghiem, vi phạm 2NF.",
            fdEn: "TestCode → TestName (Partial) | (PatientID, TestCode) → TestResult (Full)",
            fdVi: "MaXetNghiem → TenXetNghiem (Một phần) | Cả hai → KetQua (Đầy đủ)",
            problemEn: "Update Anomaly: Updating test procedure name requires modifying every patient's order record.",
            problemVi: "Dị thường cập nhật: Đổi tên quy trình xét nghiệm phải sửa từng dòng của bệnh nhân.",
            columns: ["PatientID*", "TestCode*", "TestName", "TestResult"],
            rows: [
              ["P-11", "T-CBC", "Complete Blood Count", "Normal (WBC: 6.2)"],
              ["P-12", "T-CBC", "Complete Blood Count", "Elevated (WBC: 12.5)"]
            ],
            splitResults: [
              {
                id: "c2_tests_clean",
                name: "LabTestCatalog",
                nameVi: "DanhMucXetNghiem",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Test Catalog",
                explTitleVi: "2NF Đạt: Danh Mục Xét Nghiệm",
                explDescEn: "Test details isolated.",
                explDescVi: "Thông tin xét nghiệm độc lập.",
                fdEn: "TestCode → TestName",
                fdVi: "MaXetNghiem → TenXetNghiem",
                problemEn: "Problem Solved: Test catalog stored once.",
                problemVi: "Vấn đề đã giải quyết: Danh mục xét nghiệm lưu duy nhất 1 nơi.",
                columns: ["TestCode*", "TestName"],
                rows: [
                  ["T-CBC", "Complete Blood Count"]
                ]
              },
              {
                id: "c2_patient_test_results",
                name: "PatientLabResults",
                nameVi: "KetQuaXetNghiemBN",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Associative Result Table",
                explTitleVi: "2NF Đạt: Bảng Kết Quả Kết Hợp",
                explDescEn: "Result depends on both PatientID and TestCode.",
                explDescVi: "Kết quả phụ thuộc vào cả 2 khóa.",
                fdEn: "PatientID, TestCode → TestResult",
                fdVi: "MaBenhNhan, MaXetNghiem → KetQua",
                problemEn: "Clean test results.",
                problemVi: "Kết quả xét nghiệm chuẩn xác.",
                columns: ["PatientID*", "TestCode*", "TestResult"],
                rows: [
                  ["P-11", "T-CBC", "Normal (WBC: 6.2)"],
                  ["P-12", "T-CBC", "Elevated (WBC: 12.5)"]
                ]
              }
            ]
          },
          // Locked tables for future 3NF, BCNF, 4NF
          {
            id: "c2_clinic_branches_locked_2nf",
            name: "ClinicBranches",
            nameVi: "ChiNhanhPhongKham",
            isLocked: true,
            targetStep: "3NF",
            isOk: false,
            needsNorm: false,
            explTitleEn: "Locked Table (Scheduled for 3NF)",
            explTitleVi: "Bảng Khóa (Chờ Chuẩn Hóa Ở Bước 3NF)",
            explDescEn: "Decomposed in Step 3NF.",
            explDescVi: "Sẽ được phân rã ở bước 3NF.",
            fdEn: "ClinicID → CityPostal → RegionalTax",
            fdVi: "MaPhongKham → MaVung → ThueVung",
            problemEn: "Locked until 3NF.",
            problemVi: "Đang khóa cho đến bước 3NF.",
            columns: ["ClinicID*", "ClinicName", "CityPostal", "RegionalTax"],
            rows: [["CLN-1", "Central Hospital Clinic", "POST-70000", "8.5%"]]
          }
        ]
      },

      "3nf": {
        stepKey: "3nf",
        nextStepKey: "bcnf",
        shortTitleEn: "Clinics & Doctor Depts",
        shortTitleVi: "Phòng Khám & Bác Sĩ (3NF)",
        titleEn: "Step 3NF: Dual Transitive Dependency Tables (Clinics & DoctorDepts)",
        titleVi: "Bước 3NF: Hai Bảng Phụ Thuộc Bắc Cầu (PhongKham & KhoaDieuTri)",
        subtitleEn: "Eliminate transitive dependencies: ClinicID → CityPostal → RegionalTax and DoctorID → WardID → WardDirector.",
        subtitleVi: "Khử phụ thuộc bắc cầu qua MaVung và MaKhoaDieuTri.",
        nextStepTitleEn: "3NF → BCNF: Dual Non-Superkey Determinant Tables (Shifts & SurgeryUnits)",
        nextStepTitleVi: "3NF → BCNF: Hai Bảng Vi Phạm BCNF (LichTruc & KipMoChuyenKhoa)",
        tables: [
          {
            id: "c2_clinic_branches",
            name: "ClinicBranches",
            nameVi: "ChiNhanhPhongKham",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            transitiveCols: ["RegionalTax"],
            explTitleEn: "3NF Issue: RegionalTax depends on CityPostal",
            explTitleVi: "Vấn Đề 3NF: ThueVung Phụ Thuộc Vào MaVung",
            explDescEn: "ClinicID determines CityPostal, which determines RegionalTax.",
            explDescVi: "MaPhongKham xác định MaVung, MaVung lại xác định ThueVung.",
            fdEn: "ClinicID → CityPostal | CityPostal → RegionalTax",
            fdVi: "MaPhongKham → MaVung | MaVung → ThueVung",
            problemEn: "Update Anomaly: If regional tax changes, every clinic row in that postal zone must be updated.",
            problemVi: "Dị thường cập nhật: Nếu thuế vùng thay đổi, phải sửa toàn bộ các dòng phòng khám thuộc vùng đó.",
            columns: ["ClinicID*", "ClinicName", "CityPostal", "RegionalTax"],
            rows: [
              ["CLN-1", "Central Hospital Clinic", "POST-70000", "8.5%"],
              ["CLN-2", "District 7 Outpatient", "POST-70000", "8.5%"]
            ],
            splitResults: [
              {
                id: "c2_clinics_clean",
                name: "Clinics",
                nameVi: "PhongKham",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Direct Key Dependency",
                explTitleVi: "3NF Đạt: Phụ Thuộc Trực Tiếp Khóa",
                explDescEn: "Points to CityPostal without tax duplication.",
                explDescVi: "Liên kết MaVung không dư thừa thuế.",
                fdEn: "ClinicID → ClinicName, CityPostal",
                fdVi: "MaPhongKham → TenPhongKham, MaVung",
                problemEn: "Problem Solved: 3NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt chuẩn 3NF.",
                columns: ["ClinicID*", "ClinicName", "CityPostal"],
                rows: [["CLN-1", "Central Hospital Clinic", "POST-70000"]]
              },
              {
                id: "c2_tax_zones_clean",
                name: "PostalTaxZones",
                nameVi: "VungThueKhuVuc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Isolated Tax Authority",
                explTitleVi: "3NF Đạt: Bảng Thuế Khu Vực Độc Lập",
                explDescEn: "Regional tax updated in single record.",
                explDescVi: "Thuế vùng cập nhật duy nhất tại 1 nơi.",
                fdEn: "CityPostal → RegionalTax",
                fdVi: "MaVung → ThueVung",
                problemEn: "Problem Solved: Updating tax takes 1 row.",
                problemVi: "Vấn đề đã giải quyết: Cập nhật thuế chỉ mất 1 dòng.",
                columns: ["CityPostal*", "RegionalTax"],
                rows: [["POST-70000", "8.5%"]]
              }
            ]
          },
          {
            id: "c2_doctor_departments",
            name: "DoctorDepartments",
            nameVi: "BacSiKhoaDieuTri",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            transitiveCols: ["WardDirector"],
            explTitleEn: "3NF Issue: WardDirector depends on WardID",
            explTitleVi: "Vấn Đề 3NF: TruongKhoa Phụ Thuộc Vào MaKhoaDieuTri",
            explDescEn: "DoctorID determines WardID, which determines WardDirector.",
            explDescVi: "MaBacSi xác định MaKhoaDieuTri, MaKhoaDieuTri xác định TruongKhoa.",
            fdEn: "DoctorID → WardID | WardID → WardDirector",
            fdVi: "MaBacSi → MaKhoaDieuTri | MaKhoaDieuTri → TruongKhoa",
            problemEn: "Deletion Anomaly: If all doctors in cardiology resign, deleting doctor rows deletes the cardiology department and Dr. Cuddy completely!",
            problemVi: "Dị thường xóa: Nếu các bác sĩ tim mạch nghỉ việc, xóa dòng bác sĩ sẽ vô tình xóa sạch luôn khoa Tim mạch và Trưởng khoa khỏi cơ sở dữ liệu!",
            columns: ["DoctorID*", "DoctorName", "WardID", "WardDirector"],
            rows: [
              ["DOC-01", "Dr. Gregory House", "WARD-CARDIO", "Dr. Lisa Cuddy"],
              ["DOC-02", "Dr. Robert Chase", "WARD-CARDIO", "Dr. Lisa Cuddy"]
            ],
            splitResults: [
              {
                id: "c2_doctors_clean",
                name: "Doctors",
                nameVi: "BacSi",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Doctor Entity",
                explTitleVi: "3NF Đạt: Bảng Bác Sĩ",
                explDescEn: "Points to WardID.",
                explDescVi: "Tham chiếu MaKhoaDieuTri.",
                fdEn: "DoctorID → DoctorName, WardID",
                fdVi: "MaBacSi → TenBacSi, MaKhoaDieuTri",
                problemEn: "Problem Solved: 3NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 3NF.",
                columns: ["DoctorID*", "DoctorName", "WardID"],
                rows: [["DOC-01", "Dr. Gregory House", "WARD-CARDIO"]]
              },
              {
                id: "c2_wards_clean",
                name: "HospitalWards",
                nameVi: "KhoaDieuTri",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Ward Master Table",
                explTitleVi: "3NF Đạt: Danh Mục Khoa Điều Trị",
                explDescEn: "Ward Director stored once.",
                explDescVi: "Trưởng khoa lưu duy nhất 1 lần.",
                fdEn: "WardID → WardDirector",
                fdVi: "MaKhoaDieuTri → TruongKhoa",
                problemEn: "Problem Solved: Wards exist independently of doctor records.",
                problemVi: "Vấn đề đã giải quyết: Khoa tồn tại độc lập với nhân sự bác sĩ.",
                columns: ["WardID*", "WardDirector"],
                rows: [["WARD-CARDIO", "Dr. Lisa Cuddy"]]
              }
            ]
          }
        ]
      },

      "bcnf": {
        stepKey: "bcnf",
        nextStepKey: "4nf",
        shortTitleEn: "Shifts & Surgery Units",
        shortTitleVi: "Ca Trực & Kíp Mổ (BCNF)",
        titleEn: "Step BCNF: Dual Non-Superkey Determinant Tables (Shifts & SurgeryUnits)",
        titleVi: "Bước BCNF: Hai Bảng Vi Phạm BCNF (LichTruc & KipMoChuyenKhoa)",
        subtitleEn: "In each table, overlapping candidate keys contain determinants that are not superkeys. Click to decompose into BCNF.",
        subtitleVi: "Định thức không phải siêu khóa dù thuộc tính phụ thuộc là khóa. Nhấp để phân rã đạt chuẩn BCNF.",
        nextStepTitleEn: "BCNF → 4NF: Eliminating Multi-Valued Dependencies (Skills & Vendors)",
        nextStepTitleVi: "BCNF → 4NF: Loại Bỏ Phụ Thuộc Đa Trị (KyNangBS & ThietBiNhaCungCap)",
        tables: [
          {
            id: "c2_doctor_shifts",
            name: "DoctorClinicSchedule",
            nameVi: "LichKhamBacSiPhongKham",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            bcnfCols: ["RoomNumber*"],
            explTitleEn: "BCNF Violation: RoomNumber → ShiftTime (RoomNumber is not superkey)",
            explTitleVi: "Vi Phạm BCNF: SoPhong → CaTruc (SoPhong không phải siêu khóa)",
            explDescEn: "RoomNumber determines ShiftTime, but RoomNumber is not a superkey.",
            explDescVi: "SoPhong xác định CaTruc nhưng SoPhong không phải siêu khóa.",
            fdEn: "DoctorID, ShiftTime → RoomNumber | RoomNumber → ShiftTime",
            fdVi: "MaBacSi, CaTruc → SoPhong | SoPhong → CaTruc",
            problemEn: "Update Anomaly: If Room-101 shifts from Morning to Afternoon, every doctor scheduled in Room-101 must have their row modified.",
            problemVi: "Dị thường cập nhật: Nếu Phòng 101 đổi ca trực từ sáng sang chiều, toàn bộ bác sĩ xếp phòng này đều phải cập nhật lại dòng dữ liệu.",
            columns: ["DoctorID*", "ShiftTime*", "RoomNumber"],
            rows: [
              ["DOC-01", "Morning (08:00)", "ROOM-101"],
              ["DOC-03", "Morning (08:00)", "ROOM-101"]
            ],
            splitResults: [
              {
                id: "c2_room_shift_bcnf",
                name: "ClinicRoomShifts",
                nameVi: "PhongKhamCaTruc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: RoomNumber is Superkey",
                explTitleVi: "BCNF Đạt: SoPhong Là Siêu Khóa",
                explDescEn: "Each room is assigned to specific shift hours.",
                explDescVi: "Mỗi phòng gắn với ca trực xác định.",
                fdEn: "RoomNumber → ShiftTime",
                fdVi: "SoPhong → CaTruc",
                problemEn: "Problem Solved: 1 row update for room shift reassignments.",
                problemVi: "Vấn đề đã giải quyết: Đổi ca trực của phòng chỉ mất 1 dòng UPDATE.",
                columns: ["RoomNumber*", "ShiftTime"],
                rows: [["ROOM-101", "Morning (08:00)"]]
              },
              {
                id: "c2_doctor_rooms_bcnf",
                name: "DoctorRooms",
                nameVi: "BacSiPhongKham",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: Binary Relation",
                explTitleVi: "BCNF Đạt: Quan Hệ Nhị Phân",
                explDescEn: "Doctors assigned to rooms.",
                explDescVi: "Bác sĩ phụ trách phòng khám.",
                fdEn: "DoctorID, RoomNumber → (All Key)",
                fdVi: "MaBacSi, SoPhong → (Toàn bộ là khóa)",
                problemEn: "Pure binary relation.",
                problemVi: "Quan hệ nhị phân sạch.",
                columns: ["DoctorID*", "RoomNumber*"],
                rows: [
                  ["DOC-01", "ROOM-101"],
                  ["DOC-03", "ROOM-101"]
                ]
              }
            ]
          },
          {
            id: "c2_surgery_units",
            name: "SpecialistCareUnit",
            nameVi: "KipMoChuyenKhoa",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            bcnfCols: ["LeadSurgeon*"],
            explTitleEn: "BCNF Violation: LeadSurgeon → SurgeryCode",
            explTitleVi: "Vi Phạm BCNF: BacSiMoChinh → MaCaPhauThuat",
            explDescEn: "Each lead surgeon specializes in only one surgery type. LeadSurgeon is not a candidate key.",
            explDescVi: "Mỗi bác sĩ mổ chính chỉ phụ trách một loại phẫu thuật. BacSiMoChinh không phải siêu khóa.",
            fdEn: "PatientID, SurgeryCode → LeadSurgeon | LeadSurgeon → SurgeryCode",
            fdVi: "MaBN, MaCaMo → BacSiMo | BacSiMo → MaCaMo",
            problemEn: "Update Anomaly: If Dr. House switches surgery focus, all patients operated by Dr. House must be updated.",
            problemVi: "Dị thường cập nhật: Nếu bác sĩ đổi chuyên khoa mổ, toàn bộ bệnh nhân của bác sĩ đều phải cập nhật.",
            columns: ["PatientID*", "SurgeryCode*", "LeadSurgeon"],
            rows: [
              ["P-11", "SURG-BYPASS", "Dr. House"],
              ["P-12", "SURG-BYPASS", "Dr. House"]
            ],
            splitResults: [
              {
                id: "c2_surgeon_specialty_bcnf",
                name: "SurgeonSpecialties",
                nameVi: "ChuyenKhoaBacSiMo",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: LeadSurgeon is Superkey",
                explTitleVi: "BCNF Đạt: BacSiMoChinh Là Siêu Khóa",
                explDescEn: "Surgeon specialty isolated.",
                explDescVi: "Chuyên môn phẫu thuật độc lập.",
                fdEn: "LeadSurgeon → SurgeryCode",
                fdVi: "BacSiMoChinh → MaCaPhauThuat",
                problemEn: "Problem Solved: 1 row update for specialty.",
                problemVi: "Vấn đề đã giải quyết: Đổi chuyên khoa chỉ mất 1 dòng.",
                columns: ["LeadSurgeon*", "SurgeryCode"],
                rows: [["Dr. House", "SURG-BYPASS"]]
              },
              {
                id: "c2_patient_surgeon_bcnf",
                name: "PatientSurgeons",
                nameVi: "BenhNhanBacSiMo",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: Patient to Surgeon Mapping",
                explTitleVi: "BCNF Đạt: Bệnh Nhân Gắn Với Bác Sĩ Mổ",
                explDescEn: "All key attributes.",
                explDescVi: "Toàn bộ là thuộc tính khóa.",
                fdEn: "PatientID, LeadSurgeon → (All Key)",
                fdVi: "MaBenhNhan, BacSiMoChinh → (Khóa kết hợp)",
                problemEn: "Clean association.",
                problemVi: "Liên kết chuẩn xác.",
                columns: ["PatientID*", "LeadSurgeon*"],
                rows: [
                  ["P-11", "Dr. House"],
                  ["P-12", "Dr. House"]
                ]
              }
            ]
          }
        ]
      },

      "4nf": {
        stepKey: "4nf",
        nextStepKey: null,
        shortTitleEn: "Doctor Skills & Vendors",
        shortTitleVi: "Kỹ Năng & Thiết Bị (4NF)",
        titleEn: "Step 4NF: Dual MVD Tables (DoctorSkills & WardEquipment)",
        titleVi: "Bước 4NF: Hai Bảng Phụ Thuộc Đa Trị (KyNangBS & ThietBiKhoa)",
        subtitleEn: "DoctorID ↠ Specialty | Language and WardID ↠ EquipmentType | VendorContract cause Cartesian duplication. Click to split.",
        subtitleVi: "Quan hệ 1-nhiều độc lập gây trùng lặp tích Descartes. Nhấp để phân rã 4NF.",
        nextStepTitleEn: "Healthcare Schema Fully Normalized to 4NF!",
        nextStepTitleVi: "Lược Đồ Y Tế Đã Đạt Chuẩn 4NF Hoàn Toàn!",
        tables: [
          {
            id: "c2_doctor_skills_lang",
            name: "DoctorSkillsLanguages",
            nameVi: "ChuyenMonNgoaiNguBacSi",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            mvdCols: ["Specialty*", "Language*"],
            explTitleEn: "4NF Violation: Independent Doctor Specialties & Languages",
            explTitleVi: "Vi Phạm 4NF: Chuyên Khoa Độc Lập Với Ngoại Ngữ",
            explDescEn: "DoctorID ↠ Specialty and DoctorID ↠ Language independently.",
            explDescVi: "MaBacSi ↠ ChuyenKhoa và MaBacSi ↠ NgoaiNgu độc lập nhau.",
            fdEn: "DoctorID ↠ Specialty | DoctorID ↠ Language",
            fdVi: "MaBacSi ↠ ChuyenKhoa | MaBacSi ↠ NgoaiNgu",
            problemEn: "Cartesian Bloat: 3 specialties × 3 languages = 9 rows. Adding a 4th language requires inserting 3 rows. In 4NF, adding a language takes 1 row insert.",
            problemVi: "Nở rộng tích Descartes: 3 chuyên khoa × 3 ngoại ngữ = 9 dòng. Thêm ngoại ngữ thứ 4 phải chèn 3 dòng. Với 4NF, thêm ngoại ngữ chỉ mất 1 dòng.",
            columns: ["DoctorID*", "Specialty*", "Language*"],
            rows: [
              ["DOC-01", "Diagnostics", "English"],
              ["DOC-01", "Diagnostics", "French"],
              ["DOC-01", "Nephrology", "English"],
              ["DOC-01", "Nephrology", "French"]
            ],
            splitResults: [
              {
                id: "c2_doctor_specialties_4nf",
                name: "DoctorSpecialties",
                nameVi: "ChuyenKhoaBacSi",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân",
                explDescEn: "Doctor specialties isolated.",
                explDescVi: "Chuyên khoa bác sĩ độc lập.",
                fdEn: "DoctorID ↠ Specialty",
                fdVi: "MaBacSi ↠ ChuyenKhoa",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["DoctorID*", "Specialty*"],
                rows: [
                  ["DOC-01", "Diagnostics"],
                  ["DOC-01", "Nephrology"]
                ]
              },
              {
                id: "c2_doctor_languages_4nf",
                name: "DoctorLanguages",
                nameVi: "NgoaiNguBacSi",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân",
                explDescEn: "Doctor languages isolated.",
                explDescVi: "Ngoại ngữ bác sĩ độc lập.",
                fdEn: "DoctorID ↠ Language",
                fdVi: "MaBacSi ↠ NgoaiNgu",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["DoctorID*", "Language*"],
                rows: [
                  ["DOC-01", "English"],
                  ["DOC-01", "French"]
                ]
              }
            ]
          },
          {
            id: "c2_ward_equipment_vendors",
            name: "WardEquipmentVendors",
            nameVi: "ThietBiNhaCungCapKhoa",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            mvdCols: ["EquipmentType*", "VendorContract*"],
            explTitleEn: "4NF Violation: Independent Equipment & Vendors",
            explTitleVi: "Vi Phạm 4NF: Loại Thiết Bị Độc Lập Với Nhà Cung Cấp",
            explDescEn: "WardID ↠ EquipmentType and WardID ↠ VendorContract independently.",
            explDescVi: "MaKhoaDieuTri ↠ LoaiThietBi và MaKhoaDieuTri ↠ HopDongCungCap độc lập.",
            fdEn: "WardID ↠ EquipmentType | WardID ↠ VendorContract",
            fdVi: "MaKhoaDieuTri ↠ LoaiThietBi | MaKhoaDieuTri ↠ HopDongCungCap",
            problemEn: "Cartesian Duplication: Equipment and contracts are independent but forced together.",
            problemVi: "Nhân chéo trùng lặp: Thiết bị và hợp đồng độc lập nhưng bị lưu chung.",
            columns: ["WardID*", "EquipmentType*", "VendorContract*"],
            rows: [
              ["WARD-CARDIO", "Defibrillator", "Siemens Health"],
              ["WARD-CARDIO", "Defibrillator", "GE Healthcare"],
              ["WARD-CARDIO", "ECG Monitor", "Siemens Health"],
              ["WARD-CARDIO", "ECG Monitor", "GE Healthcare"]
            ],
            splitResults: [
              {
                id: "c2_ward_equipment_4nf",
                name: "WardEquipment",
                nameVi: "ThietBiKhoaDieuTri",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Ward Equipment",
                explTitleVi: "4NF Đạt: Thiết Bị Khoa Điều Trị",
                explDescEn: "Equipment types isolated.",
                explDescVi: "Loại thiết bị độc lập.",
                fdEn: "WardID ↠ EquipmentType",
                fdVi: "MaKhoaDieuTri ↠ LoaiThietBi",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["WardID*", "EquipmentType*"],
                rows: [
                  ["WARD-CARDIO", "Defibrillator"],
                  ["WARD-CARDIO", "ECG Monitor"]
                ]
              },
              {
                id: "c2_ward_vendors_4nf",
                name: "WardVendors",
                nameVi: "NhaCungCapKhoaDieuTri",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Ward Vendors",
                explTitleVi: "4NF Đạt: Nhà Cung Cấp Khoa",
                explDescEn: "Vendor contracts isolated.",
                explDescVi: "Hợp đồng cung cấp độc lập.",
                fdEn: "WardID ↠ VendorContract",
                fdVi: "MaKhoaDieuTri ↠ HopDongCungCap",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["WardID*", "VendorContract*"],
                rows: [
                  ["WARD-CARDIO", "Siemens Health"],
                  ["WARD-CARDIO", "GE Healthcare"]
                ]
              }
            ]
          }
        ]
      }
    }
  },

  // =========================================================================
  // CASE 3: PROGRESSIVE PIPELINE DECOMPOSITION
  // =========================================================================
  case3: {
    id: 3,
    titleEn: "Case 3: Progressive Pipeline",
    titleVi: "Trường Hợp 3: Phân Rã Liên Tục",
    descEn: "Decomposes one of the split tables from previous normalization step-by-step",
    descVi: "Phân rã tiếp tục một trong các bảng vừa được tách ở bước trước",
    steps: {
      "1nf": {
        stepKey: "1nf",
        nextStepKey: "2nf",
        shortTitleEn: "Split MegaRegistry",
        shortTitleVi: "Tách Sổ Đăng Ký (1NF)",
        titleEn: "Step 1NF: Unnormalized MegaRegistry Decomposition",
        titleVi: "Bước 1NF: Phân Rã Siêu Bảng SoDangKyDaiHoc",
        subtitleEn: "Non-atomic Textbooks contains multiple values. Click to split into 1NF tables.",
        subtitleVi: "Cột GiaoTrinh chứa nhiều giá trị trong một ô. Nhấp để phân rã 1NF.",
        nextStepTitleEn: "1NF → 2NF: Split 'StudentCourses' from 1NF Decomposition",
        nextStepTitleVi: "1NF → 2NF: Tách Tiếp Bảng 'KetQuaHocTap' Vừa Tạo Từ 1NF",
        tables: [
          {
            id: "c3_mega_registry",
            name: "UniversityMonolithRegistry",
            nameVi: "SoDangKyDaiHocTongHop",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            problematicCol: "Textbooks",
            explTitleEn: "1NF Violation: Textbooks multi-value array",
            explTitleVi: "Vi Phạm 1NF: Mảng Giáo Trình Đa Trị Trong Ô",
            explDescEn: "Textbooks column contains comma-separated values in single cells.",
            explDescVi: "Cột GiaoTrinh chứa nhiều giá trị phân tách bằng dấu phẩy.",
            fdEn: "StudentID, CourseID → Grade | Textbooks is multi-valued",
            fdVi: "MaSinhVien, MaMonHoc → DiemSo | GiaoTrinh là đa trị",
            problemEn: "Update Anomaly: Changing a textbook title requires parsing and overwriting array cells.",
            problemVi: "Dị thường cập nhật: Đổi tên giáo trình phải sửa mảng chuỗi trong ô dữ liệu.",
            columns: ["StudentID*", "CourseID*", "StudentName", "CourseName", "InstructorID", "InstructorName", "OfficeLocation", "Grade", "Textbooks"],
            rows: [
              ["S201", "CS305", "Marcus Aurelius", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "A", ["Modern DB Design", "SQL Recipes"]],
              ["S202", "CS305", "Seneca", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "B+", ["Modern DB Design", "SQL Recipes"]]
            ],
            splitResults: [
              {
                id: "c3_student_courses_1nf",
                name: "StudentCourses",
                nameVi: "KetQuaHocTap",
                isOk: false,
                needsNorm: true,
                explTitleEn: "1NF OK (Target for 2NF): Partial Dependencies",
                explTitleVi: "1NF Đạt (Mục Tiêu Cho 2NF): Còn Phụ Thuộc Một Phần",
                explDescEn: "Atomic now, but composite key (StudentID, CourseID) has partial dependencies.",
                explDescVi: "Đã đạt nguyên tố 1NF, nhưng còn phụ thuộc một phần cần giải quyết ở 2NF.",
                fdEn: "StudentID, CourseID → StudentName, CourseName, InstructorID, Grade",
                fdVi: "MaSinhVien, MaMonHoc → TenSinhVien, TenMonHoc, MaGiangVien, DiemSo",
                problemEn: "Scheduled for partial dependency split in 2NF.",
                problemVi: "Sẽ được phân rã phụ thuộc một phần ở bước 2NF.",
                columns: ["StudentID*", "CourseID*", "StudentName", "CourseName", "InstructorID", "InstructorName", "OfficeLocation", "Grade"],
                rows: [
                  ["S201", "CS305", "Marcus Aurelius", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "A"],
                  ["S202", "CS305", "Seneca", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "B+"]
                ]
              },
              {
                id: "c3_course_textbooks_1nf",
                name: "CourseTextbooks",
                nameVi: "GiaoTrinhMonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "1NF Satisfied: Split Atomic Relation",
                explTitleVi: "1NF Đạt: Quan Hệ Giáo Trình Đã Tách",
                explDescEn: "Each textbook title is atomic in green boxes.",
                explDescVi: "Mỗi tựa giáo trình được đặt trong hộp xanh nguyên tố.",
                fdEn: "CourseID, Textbook → (Composite Key)",
                fdVi: "MaMonHoc, GiaoTrinh → (Khóa kết hợp)",
                problemEn: "Problem Solved: 1NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt chuẩn 1NF.",
                columns: ["CourseID*", "Textbook*"],
                rows: [
                  ["CS305", "Modern DB Design", true],
                  ["CS305", "SQL Recipes", true]
                ]
              }
            ]
          }
        ]
      },

      "2nf": {
        stepKey: "2nf",
        nextStepKey: "3nf",
        shortTitleEn: "Split StudentCourses",
        shortTitleVi: "Tách Bảng KetQuaHocTap (2NF)",
        titleEn: "Step 2NF: Split 'StudentCourses' from 1NF",
        titleVi: "Bước 2NF: Phân Rã Bảng 'KetQuaHocTap' Từ 1NF",
        subtitleEn: "CourseTextbooks is OK. We now normalize the split table 'StudentCourses' that has partial dependencies.",
        subtitleVi: "Bảng GiaoTrinhMonHoc đã OK. Ta tiến hành chuẩn hóa bảng 'KetQuaHocTap' vừa tách từ 1NF vì còn phụ thuộc một phần.",
        nextStepTitleEn: "2NF → 3NF: Split 'CourseInstructors' from 2NF Decomposition",
        nextStepTitleVi: "2NF → 3NF: Tách Tiếp Bảng 'MonHocGiangVien' Vừa Tạo Từ 2NF",
        tables: [
          {
            id: "c3_course_textbooks_ok2",
            name: "CourseTextbooks",
            nameVi: "GiaoTrinhMonHoc",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained from 1NF: Already 2NF Compliant",
            explTitleVi: "Giữ Từ Bước 1NF: Đã Thỏa 2NF",
            explDescEn: "Contains no partial dependencies.",
            explDescVi: "Không chứa phụ thuộc một phần.",
            fdEn: "CourseID, Textbook → (All Key)",
            fdVi: "MaMonHoc, GiaoTrinh → (Toàn bộ là khóa)",
            problemEn: "No partial dependencies.",
            problemVi: "Không có phụ thuộc một phần.",
            columns: ["CourseID*", "Textbook*"],
            rows: [
              ["CS305", "Modern DB Design"],
              ["CS305", "SQL Recipes"]
            ]
          },
          {
            id: "c3_student_courses_split",
            name: "StudentCourses",
            nameVi: "KetQuaHocTap",
            isOk: false,
            needsNorm: true,
            hasGraph: true,
            graphConfig: {
              compositeKey: "StudentID, CourseID",
              compositeKeyVi: "MaSinhVien, MaMonHoc",
              attributes: [
                { name: "StudentName", nameVi: "TenSinhVien", dependsOn: "StudentID only", dependsOnVi: "Chỉ MaSinhVien", type: "partial" },
                { name: "Grade", nameVi: "DiemSo", dependsOn: "Both IDs", dependsOnVi: "Cả 2 khóa", type: "full" },
                { name: "Course & Instructor", nameVi: "MonHoc & GiangVien", dependsOn: "CourseID only", dependsOnVi: "Chỉ MaMonHoc", type: "partial" }
              ]
            },
            partialDepCols: ["StudentName", "CourseName", "InstructorID", "InstructorName", "OfficeLocation"],
            explTitleEn: "2NF Violation in StudentCourses: Partial Dependencies",
            explTitleVi: "Vi Phạm 2NF ở KetQuaHocTap: Phụ Thuộc Hàm Một Phần",
            explDescEn: "StudentName depends solely on StudentID. Course and instructor details depend solely on CourseID.",
            explDescVi: "TenSinhVien chỉ phụ thuộc MaSinhVien. Thông tin môn học và giảng viên chỉ phụ thuộc MaMonHoc.",
            fdEn: "StudentID → StudentName | CourseID → CourseName, InstructorID, etc. | Both → Grade",
            fdVi: "MaSinhVien → TenSinhVien | MaMonHoc → TenMonHoc, MaGiangVien, v.v. | Cả hai → DiemSo",
            problemEn: "Update Anomaly: Course and Instructor details are duplicated across every student enrolled.",
            problemVi: "Dị thường cập nhật: Thông tin môn học và giảng viên bị lặp lại ở mọi sinh viên đăng ký.",
            columns: ["StudentID*", "CourseID*", "StudentName", "CourseName", "InstructorID", "InstructorName", "OfficeLocation", "Grade"],
            rows: [
              ["S201", "CS305", "Marcus Aurelius", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "A"],
              ["S202", "CS305", "Seneca", "Database Internals", "INS-07", "Prof. Knuth", "Room 401", "B+"]
            ],
            splitResults: [
              {
                id: "c3_students_2nf",
                name: "Students",
                nameVi: "SinhVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Students Entity",
                explTitleVi: "2NF Đạt: Bảng Sinh Viên",
                explDescEn: "No partial dependencies.",
                explDescVi: "Không còn phụ thuộc một phần.",
                fdEn: "StudentID → StudentName",
                fdVi: "MaSinhVien → TenSinhVien",
                problemEn: "Problem Solved: 2NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 2NF.",
                columns: ["StudentID*", "StudentName"],
                rows: [
                  ["S201", "Marcus Aurelius"],
                  ["S202", "Seneca"]
                ]
              },
              {
                id: "c3_enrollments_2nf",
                name: "Enrollments",
                nameVi: "DangKyHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "2NF OK: Full Dependency Relation",
                explTitleVi: "2NF Đạt: Phụ Thuộc Đầy Đủ",
                explDescEn: "Grade requires both IDs.",
                explDescVi: "DiemSo cần cả 2 khóa.",
                fdEn: "StudentID, CourseID → Grade",
                fdVi: "MaSinhVien, MaMonHoc → DiemSo",
                problemEn: "Problem Solved: 2NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 2NF.",
                columns: ["StudentID*", "CourseID*", "Grade"],
                rows: [
                  ["S201", "CS305", "A"],
                  ["S202", "CS305", "B+"]
                ]
              },
              {
                id: "c3_course_instructors_3nf_target",
                name: "CourseInstructors",
                nameVi: "MonHocGiangVien",
                isOk: false,
                needsNorm: true,
                explTitleEn: "2NF OK (Target for 3NF): Contains Transitive Dependency",
                explTitleVi: "2NF Đạt (Mục Tiêu Cho 3NF): Chứa Phụ Thuộc Bắc Cầu",
                explDescEn: "CourseID → InstructorID and InstructorID → InstructorName, Office (Transitive).",
                explDescVi: "MaMonHoc → MaGiangVien và MaGiangVien → TenGiangVien, VanPhong (Bắc cầu).",
                fdEn: "CourseID → CourseName, InstructorID | InstructorID → InstructorName, OfficeLocation",
                fdVi: "MaMonHoc → TenMonHoc, MaGiangVien | MaGiangVien → TenGiangVien, ViTriVanPhong",
                problemEn: "Transitive dependency to be decomposed in Step 3NF.",
                problemVi: "Phụ thuộc bắc cầu sẽ được phân rã ở bước 3NF.",
                columns: ["CourseID*", "CourseName", "InstructorID", "InstructorName", "OfficeLocation"],
                rows: [
                  ["CS305", "Database Internals", "INS-07", "Prof. Knuth", "Room 401"],
                  ["CS401", "Operating Systems", "INS-07", "Prof. Knuth", "Room 401"]
                ]
              }
            ]
          }
        ]
      },

      "3nf": {
        stepKey: "3nf",
        nextStepKey: "bcnf",
        shortTitleEn: "Split CourseInstructors",
        shortTitleVi: "Tách Bảng MonHocGiangVien (3NF)",
        titleEn: "Step 3NF: Split 'CourseInstructors' from 2NF",
        titleVi: "Bước 3NF: Phân Rã Bảng 'MonHocGiangVien' Từ 2NF",
        subtitleEn: "Eliminate transitive dependency: CourseID → InstructorID → OfficeLocation.",
        subtitleVi: "Khử phụ thuộc bắc cầu qua MaGiangVien.",
        nextStepTitleEn: "3NF → BCNF: Split 'InstructorAdvisory' from System",
        nextStepTitleVi: "3NF → BCNF: Phân Rã Bảng 'CoVanHocTap' Đạt Chuẩn Boyce-Codd",
        tables: [
          {
            id: "c3_students_retain_3nf",
            name: "Students",
            nameVi: "SinhVien",
            isOk: true,
            needsNorm: false,
            explTitleEn: "Retained: 3NF Compliant",
            explTitleVi: "Giữ Từ Bước Trước: Đạt 3NF",
            explDescEn: "Single primary key.",
            explDescVi: "Khóa chính đơn.",
            fdEn: "StudentID → StudentName",
            fdVi: "MaSinhVien → TenSinhVien",
            problemEn: "Normalized.",
            problemVi: "Đã đạt chuẩn.",
            columns: ["StudentID*", "StudentName"],
            rows: [["S201", "Marcus Aurelius"]]
          },
          {
            id: "c3_course_instructors_transitive",
            name: "CourseInstructors",
            nameVi: "MonHocGiangVien",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            transitiveCols: ["InstructorName", "OfficeLocation"],
            explTitleEn: "3NF Violation: Transitive Dependency",
            explTitleVi: "Vi Phạm 3NF: Phụ Thuộc Bắc Cầu",
            explDescEn: "Instructor details depend on non-key InstructorID.",
            explDescVi: "Thông tin giảng viên phụ thuộc thuộc tính không khóa MaGiangVien.",
            fdEn: "CourseID → InstructorID | InstructorID → InstructorName, OfficeLocation",
            fdVi: "MaMonHoc → MaGiangVien | MaGiangVien → TenGiangVien, ViTriVanPhong",
            problemEn: "Update Anomaly: Moving Prof. Knuth's office requires updating every course he teaches.",
            problemVi: "Dị thường cập nhật: Đổi văn phòng của Prof. Knuth đòi hỏi phải sửa tất cả các môn thầy dạy.",
            columns: ["CourseID*", "CourseName", "InstructorID", "InstructorName", "OfficeLocation"],
            rows: [
              ["CS305", "Database Internals", "INS-07", "Prof. Knuth", "Room 401"],
              ["CS401", "Operating Systems", "INS-07", "Prof. Knuth", "Room 401"]
            ],
            splitResults: [
              {
                id: "c3_courses_3nf",
                name: "Courses",
                nameVi: "MonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Course Relation",
                explTitleVi: "3NF Đạt: Bảng Môn Học",
                explDescEn: "Direct key dependency.",
                explDescVi: "Phụ thuộc trực tiếp vào khóa.",
                fdEn: "CourseID → CourseName, InstructorID",
                fdVi: "MaMonHoc → TenMonHoc, MaGiangVien",
                problemEn: "Problem Solved: 3NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 3NF.",
                columns: ["CourseID*", "CourseName", "InstructorID"],
                rows: [
                  ["CS305", "Database Internals", "INS-07"],
                  ["CS401", "Operating Systems", "INS-07"]
                ]
              },
              {
                id: "c3_instructors_3nf",
                name: "Instructors",
                nameVi: "GiangVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "3NF OK: Instructor Entity",
                explTitleVi: "3NF Đạt: Bảng Giảng Viên",
                explDescEn: "Instructor office isolated.",
                explDescVi: "Văn phòng giảng viên độc lập.",
                fdEn: "InstructorID → InstructorName, OfficeLocation",
                fdVi: "MaGiangVien → TenGiangVien, ViTriVanPhong",
                problemEn: "Problem Solved: Moving office takes 1 UPDATE row.",
                problemVi: "Vấn đề đã giải quyết: Đổi văn phòng chỉ mất 1 dòng UPDATE.",
                columns: ["InstructorID*", "InstructorName", "OfficeLocation"],
                rows: [
                  ["INS-07", "Prof. Knuth", "Room 401"]
                ]
              }
            ]
          }
        ]
      },

      "bcnf": {
        stepKey: "bcnf",
        nextStepKey: "4nf",
        shortTitleEn: "Split InstructorAdvisory",
        shortTitleVi: "Tách Bảng CoVanHocTap (BCNF)",
        titleEn: "Step BCNF: Split 'InstructorAdvisory' in Department",
        titleVi: "Bước BCNF: Phân Rã Bảng 'CoVanHocTap' Trong Khoa",
        subtitleEn: "In AdvisorID → CourseID, CourseID is prime (satisfies 3NF) but AdvisorID is not a superkey (violates BCNF). Click to decompose.",
        subtitleVi: "Định thức MaCoVan không phải là siêu khóa. Nhấp để phân rã đạt chuẩn BCNF.",
        nextStepTitleEn: "BCNF → 4NF: Final Decomposition of Independent Duties",
        nextStepTitleVi: "BCNF → 4NF: Phân Rã Cuối Cùng Phụ Thuộc Đa Trị NhiemVuGiangVien",
        tables: [
          {
            id: "c3_instructor_advisory_bcnf",
            name: "InstructorAdvisory",
            nameVi: "CoVanHocTap",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            bcnfCols: ["AdvisorEmail*"],
            explTitleEn: "BCNF Violation: AdvisorEmail → CourseID",
            explTitleVi: "Vi Phạm BCNF: EmailCoVan → MaMonHoc",
            explDescEn: "Each advisor advises only one course. AdvisorEmail determines CourseID, but AdvisorEmail is not a superkey.",
            explDescVi: "Mỗi cố vấn chỉ phụ trách 1 môn học. EmailCoVan xác định MaMonHoc nhưng EmailCoVan không phải siêu khóa.",
            fdEn: "StudentID, CourseID → AdvisorEmail | AdvisorEmail → CourseID",
            fdVi: "MaSinhVien, MaMonHoc → EmailCoVan | EmailCoVan → MaMonHoc",
            problemEn: "Update Anomaly: Reassigning an advisor's course assignment requires updating multiple student records.",
            problemVi: "Dị thường cập nhật: Đổi môn học phụ trách của cố vấn phải sửa nhiều dòng sinh viên.",
            columns: ["StudentID*", "CourseID*", "AdvisorEmail"],
            rows: [
              ["S201", "CS305", "knuth@univ.edu"],
              ["S202", "CS305", "knuth@univ.edu"],
              ["S201", "CS401", "turing@univ.edu"]
            ],
            splitResults: [
              {
                id: "c3_advisor_course_bcnf",
                name: "AdvisorCourse",
                nameVi: "CoVanMonHoc",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: AdvisorEmail is Superkey",
                explTitleVi: "BCNF Đạt: EmailCoVan Là Siêu Khóa",
                explDescEn: "AdvisorCourse is in BCNF.",
                explDescVi: "CoVanMonHoc đạt chuẩn BCNF.",
                fdEn: "AdvisorEmail → CourseID",
                fdVi: "EmailCoVan → MaMonHoc",
                problemEn: "Problem Solved: 1 row update for course assignment.",
                problemVi: "Vấn đề đã giải quyết: Đổi môn phụ trách chỉ mất 1 dòng.",
                columns: ["AdvisorEmail*", "CourseID"],
                rows: [
                  ["knuth@univ.edu", "CS305"],
                  ["turing@univ.edu", "CS401"]
                ]
              },
              {
                id: "c3_student_advisors_bcnf",
                name: "StudentAdvisors",
                nameVi: "SinhVienCoVan",
                isOk: true,
                needsNorm: false,
                explTitleEn: "BCNF OK: Associative Student-Advisor Table",
                explTitleVi: "BCNF Đạt: Bảng Kết Hợp Sinh Viên - Cố Vấn",
                explDescEn: "All key relation.",
                explDescVi: "Toàn bộ là khóa.",
                fdEn: "StudentID, AdvisorEmail → (All Key)",
                fdVi: "MaSinhVien, EmailCoVan → (Toàn bộ là khóa)",
                problemEn: "Problem Solved: Pure associative entity.",
                problemVi: "Vấn đề đã giải quyết: Thực thể kết hợp chuẩn BCNF.",
                columns: ["StudentID*", "AdvisorEmail*"],
                rows: [
                  ["S201", "knuth@univ.edu"],
                  ["S202", "knuth@univ.edu"],
                  ["S201", "turing@univ.edu"]
                ]
              }
            ]
          }
        ]
      },

      "4nf": {
        stepKey: "4nf",
        nextStepKey: null,
        shortTitleEn: "Split InstructorDuties",
        shortTitleVi: "Tách Nhiệm Vụ Giảng Viên (4NF)",
        titleEn: "Step 4NF: Final MVD Split on Instructor Duties",
        titleVi: "Bước 4NF: Phân Rã Cuối Cùng Phụ Thuộc Đa Trị NhiemVuGiangVien",
        subtitleEn: "InstructorID ↠ Specialty and InstructorID ↠ Committee are independent. Click to decompose into 4NF.",
        subtitleVi: "Phân rã các chuyên môn nghiên cứu và hội đồng chuyên môn độc lập của giảng viên.",
        nextStepTitleEn: "Progressive Waterfall Decomposition Fully Normalized to 4NF!",
        nextStepTitleVi: "Chuỗi Phân Rã Bảng Đã Hoàn Toàn Đạt Chuẩn 4NF!",
        tables: [
          {
            id: "c3_instructor_duties",
            name: "InstructorDuties",
            nameVi: "NhiemVuGiangVien",
            isOk: false,
            needsNorm: true,
            hasGraph: false,
            mvdCols: ["Specialty*", "Committee*"],
            explTitleEn: "4NF Violation: Independent Specialties & Committees",
            explTitleVi: "Vi Phạm 4NF: Chuyên Môn & Hội Đồng Độc Lập",
            explDescEn: "InstructorID ↠ Specialty and InstructorID ↠ Committee cause Cartesian duplication.",
            explDescVi: "MaGiangVien ↠ ChuyenMon và MaGiangVien ↠ HoiDong gây nhân tích Descartes.",
            fdEn: "InstructorID ↠ Specialty | InstructorID ↠ Committee (Independent MVDs)",
            fdVi: "MaGiangVien ↠ ChuyenMon | MaGiangVien ↠ HoiDong (MVD độc lập)",
            problemEn: "Cartesian Explosion: 2 specialties × 2 committees = 4 rows. Adding a 3rd committee requires inserting 2 rows for every specialty.",
            problemVi: "Bùng nổ tích Descartes: 2 chuyên môn × 2 hội đồng = 4 dòng. Thêm 1 hội đồng mới phải chèn thêm 2 dòng cho từng chuyên môn.",
            columns: ["InstructorID*", "Specialty*", "Committee*"],
            rows: [
              ["INS-07", "Compiler Design", "Curriculum Board"],
              ["INS-07", "Compiler Design", "Ethics Council"],
              ["INS-07", "Algorithm Analysis", "Curriculum Board"],
              ["INS-07", "Algorithm Analysis", "Ethics Council"]
            ],
            splitResults: [
              {
                id: "c3_instructor_specialties",
                name: "InstructorSpecialties",
                nameVi: "ChuyenMonGiangVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation for Specialties",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân Chuyên Môn",
                explDescEn: "Stores Instructor to Specialty mappings.",
                explDescVi: "Lưu chuyên môn của giảng viên.",
                fdEn: "InstructorID ↠ Specialty",
                fdVi: "MaGiangVien ↠ ChuyenMon",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["InstructorID*", "Specialty*"],
                rows: [
                  ["INS-07", "Compiler Design"],
                  ["INS-07", "Algorithm Analysis"]
                ]
              },
              {
                id: "c3_instructor_committees",
                name: "InstructorCommittees",
                nameVi: "HoiDongGiangVien",
                isOk: true,
                needsNorm: false,
                explTitleEn: "4NF OK: Binary Relation for Committees",
                explTitleVi: "4NF Đạt: Quan Hệ Nhị Phân Hội Đồng",
                explDescEn: "Stores Instructor to Committee mappings.",
                explDescVi: "Lưu hội đồng của giảng viên.",
                fdEn: "InstructorID ↠ Committee",
                fdVi: "MaGiangVien ↠ HoiDong",
                problemEn: "Problem Solved: 4NF satisfied.",
                problemVi: "Vấn đề đã giải quyết: Đạt 4NF.",
                columns: ["InstructorID*", "Committee*"],
                rows: [
                  ["INS-07", "Curriculum Board"],
                  ["INS-07", "Ethics Council"]
                ]
              }
            ]
          }
        ]
      }
    }
  }
};
