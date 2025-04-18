import { create } from "domain";
import { createArticle } from "./redux/article/articleSlice";


export const labels = {
    home: 'الرئيسية',
    cancel: 'الغاء',
    save: 'حفظ',
    close: 'اغلاق',
    saved: 'تم الحفظ',
    update: 'تحديث',
    updated: 'تم التحديث',
    deleted: 'تم الحذف',
    delete: 'حذف',
    create: 'اضافة',
    created: 'تم الاضافة',
    search: 'بحث',
    lookup: 'بحث',
    successfully: 'تمت العملية بنجاح',
    failed: 'فشلت العملية',
    idle: 'معلقة',
    loading: 'تحميل',
    error: 'خطأ',
    success: 'نجاح',
    action: 'العمليات',
    affairs: "القضايا",
    affair: "القضية",
    affairList: "قائمة القضايا",
    addAffair: "اضافة قضية",
    affairNumber: "رقم القضية",
    affairTitle: "عنوان القضية",
    affairDescription: "وصف القضية",
    affairDate: "تاريخ القضية",
    affairDepartment: "القضية المرفوعة",

    claimant: "المدعي",
    id:"المعرّف",
    label:"الاسم",
    settings: "الاعدادات",
    scheduler: "جدول المواعيد",
    users: "المستخدمين",
    courts: "المحاكم",
    article: "المادّة",
    createArticle: "اضافة مادة",
    caseStage: "طور القضية",
    quit: "تسجيل الخروج",

    createUser: "اضافة مستخدم",
    usersList: "قائمة المستخدمين",

    createCourt: "اضافة محكمة", 
    courtList: "قائمة المحاكم",

    createCaseStage: "اضافة طور قضية",
    caseStageList: "قائمة اطوار القضايا",
  
    articleList: "قائمة المواد",
};