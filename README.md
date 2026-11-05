# Database Normalization Interactive Lab (1NF → 4NF & BCNF)

An interactive, responsive laboratory application designed for computer science students and educators to explore and master relational database normalization across **1NF, 2NF, 3NF, BCNF, and 4NF**.

---

## 🌟 Major Highlights & Updates

### 1. Boyce-Codd Normal Form (BCNF) Included
- Extends relational normalization beyond 3NF:
  $$\text{1NF} \longrightarrow \text{2NF} \longrightarrow \text{3NF} \longrightarrow \textbf{BCNF} \longrightarrow \text{4NF}$$
- Demonstrates cases where relations satisfy 3NF (because the dependent attribute is prime) but violate BCNF because the determinant is **not a superkey** (overlapping candidate keys).
- Interactive decomposition separates non-superkey determinants into dedicated BCNF relations.

### 2. Continuous Schemas for Every Case
- **No jumping between disjoint domains**: Each demonstration case represents a unified, continuous database schema where unnormalized tables are embedded from the start.
- **Case 1: University Academic Schema**:
  - `1NF`: Eliminates multi-valued `EmergencyContacts` in student profiles.
  - `2NF`: Eliminates partial dependencies in `EnrollmentGrades` on composite key `(StudentID, CourseID)`.
  - `3NF`: Eliminates transitive dependencies in `CourseDepartments` through `DeptCode`.
  - `BCNF`: Resolves overlapping candidate keys in `AdvisorAssignments` where `AdvisorEmail → CourseCode` violates BCNF.
  - `4NF`: Eliminates independent multi-valued dependencies in `FacultyExpertiseLanguages`.
- **Case 2: Healthcare Enterprise Schema (Dual-Table Practice)**:
  - 2 problematic tables at every single step within a unified hospital database (`PatientIntake` & `StaffContacts`, `RxDetails` & `LabOrders`, `ClinicBranches` & `DoctorDepts`, `DoctorShifts` & `SurgeryUnits`, `DoctorSkills` & `WardVendors`).
- **Case 3: Progressive Waterfall Pipeline**:
  - Continuous step-by-step decomposition where a single monolithic university registry table decomposes through 1NF, 2NF, 3NF, BCNF, and 4NF.

### 3. Resulting SQL Schema (DDL) Tab & Vietnamese SQL Translation
- **Tabbed Interface**:
  - **Interactive Tables Tab**: Interactive visual tables with expand/collapse, glowing hover borders, red/green box highlights, and 2NF SVG relationship graph.
  - **Resulting SQL Schema (DDL) Tab**: Live syntax-highlighted SQL creation queries (`CREATE TABLE`) representing the current normalized state.
- **Vietnamese Localized SQL Syntax Translation**:
  - When switching language to Vietnamese, the SQL syntax itself is translated to Vietnamese:
    - `CREATE TABLE` $\rightarrow$ `TẠO BẢNG`
    - `PRIMARY KEY` $\rightarrow$ `KHÓA CHÍNH`
    - `FOREIGN KEY` $\rightarrow$ `KHÓA NGOẠI`
    - `REFERENCES` $\rightarrow$ `THAM CHIẾU`
    - `NOT NULL` $\rightarrow$ `KHÔNG RỖNG`
    - `VARCHAR` $\rightarrow$ `CHUỖI`
    - `INT` $\rightarrow$ `SỐ NGUYÊN`
    - `DATE` $\rightarrow$ `NGÀY THÁNG`
    - `ON DELETE CASCADE` $\rightarrow$ `KHI XÓA TỰ ĐỘNG`
  - Includes a one-click **Copy SQL** button with clipboard confirmation.

### 4. Theme Aligned with `sandbox-1`
- **Typography**: Inter (Body), JetBrains Mono (Code/SQL/Tables), Oswald (Progress Metrics).
- **Color Palettes**:
  - Light mode: Slate-50 background (`#f8fafc`), crisp card surfaces (`#ffffff`), borders (`#cbd5e1`), navy accents (`#0f3ba2`).
  - Dark mode: Deep obsidian background (`#0b1120`), surface panels (`#17223b`), borders (`#27354f`), bright blue highlights (`#3b82f6`).
- **Sidebar & Header Toggle**: Matches `sandbox-1` hamburger button, topic symbol badges (`01`, `02`, `03`), segmented progress bar, and rectangular theme switch button.

---

## 🚀 How to Run

### Direct in Browser
Open [index.html](file:///c:/Users/ngkhi/Dropbox/Work/EIU/TEACHING/CSN305/Visuals/Week5/sandbox-2/index.html) in any modern browser.

### Local Python Server
```powershell
python server.py
```
Open `http://localhost:8080`.
