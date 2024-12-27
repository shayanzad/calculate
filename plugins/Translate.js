// plugins/status-translate.js

export default defineNuxtPlugin(() => {
  const translateStatus = (item) => {
    switch (item) {
      case 'CANCEL':
        return 'کنسل شده';
      case 'EXTENSION':
        return 'تمدید شده';
      case 'FARE_RETURN':
        return 'سود مشارکت';
      case 'RENT_PAYMENT':
        return 'پرداخت کرایه';
      case 'WALLET':
        return 'کیف پول';
      case 'ADMIN':
        return 'ادمین';
      case 'DONE':
        return 'انجام شد';
      case 'DOING':
        return 'درحال انجام';
      case 'driverCanceled':
        return 'کنسل شده راننده';
      case 'SYSTEM':
        return 'سیستم';
      case 'FACTORY':
        return 'واحد صنفی';
      case 'COMPANY':
        return 'شرکت';
      case 'expired':
        return 'منقضی شده';
      case 'ISSUANCE_REMITTANCE':
        return 'حواله شده';
      case 'issuance_remittance':
        return 'حواله شده';
      case 'NOVINO_PAY':
        return 'نوین پرداخت';
      case 'END':
        return 'پایان اعلام بار';
      case 'PENDING':
        return 'در انتظار';
      case 'active':
        return 'فعال';
      case 'managerCanceled':
        return 'کنسل شده توسط مدیر سیستم';
      case 'REJECT_WITHDRAW_WALLET':
        return 'رد درخواست برداشت';
      case 'CANCEL_WITHDRAW_WALLET':
        return 'کنسل شدن درخواست برداشت';
      case 'COST_SMS':
        return 'هزینه پیامک';
      case 'MOVING':
        return 'در مسیر مقصد';
      case 'ARRIVED_TO_SOURCE':
        return 'در مسیر مبدا';
      case 'DELIVERED':
        return 'تحویل شده';
      case 'CANCEL_DRIVER':
        return 'کنسل راننده';
      case 'CANCEL_COMPANY':
        return 'کنسل شده توسط شرکت';
      case 'CANCEL_FACTORY':
        return 'کنسل شده واحد صنفی';
      case 'END_FACTORY':
        return 'پایان اعلام بار واحد صنفی';
      case 'NO_PRIORITY':
        return 'نداشتن اولویت';
      case 'CANCEL_DRIVER_REMITTANCE':
        return 'کنسل شده توسط راننده';
      case 'RAYAN_PAY':
        return 'رایان پرداخت';
      case 'ARRIVED_TO_DESTINATION':
        return 'در مقصد';
      case 'GLOBAL':
        return 'سراسری';
      case 'PRIVATE':
        return 'شخصی';
      case 'ACTIVE':
        return 'فعال';
      case 'CONFIRM':
        return 'تایید شده';
      case 'INACTIVE':
        return 'غیرفعال';
      case 'AUTOMATIC':
        return 'خودکار';
      case 'disable':
        return 'غیر فعال';
      case 'AUTO':
        return 'خودکار';
      case 'MANUAL':
        return 'دستی';
      case 'ACCEPTED':
        return 'تایید شده';
      case 'REJECTED':
        return 'رد شده';
      case 'UNPAID':
        return 'پرداخت نشده';
      case 'PAID':
        return 'پرداخت شده';
      case 'CANCELED':
        return 'کنسل شده';
      case 'ONLINE_PAYMENT':
        return 'پرداخت آنلاین';
      case 'CARD_TO_CARD':
        return 'کارت به کارت';
      case 'WAYBILL_PAYMENT':
        return 'پرداخت حواله حمل';
      case 'REMITTANCE_WAYBILL_PAYMENT':
        return 'پرداخت حواله بارگیری';
      case 'END_TIME':
        return 'پایان زمان اعلام بار';
      case 'CANCEL_ADMIN':
        return 'کنسل شده توسط ادمین';
      case 'WITHDRAW_WALLET':
        return 'درخواست برداشت از حساب';
      case 'REGISTER_GIFT':
        return 'هدیه ثبت نام';
      case 'ISSUING_TURN':
        return 'کاهش بابت دریافت نوبت';
      case 'RECEIPT_DEPOSIT':
        return 'افزایش بابت ثبت فیش';
      case 'END_ADMIN':
        return 'پایان اعلام بار ادمین';
      case 'driverCanceledChangeCar':
        return 'لغو کنسل تعویض ماشین راننده';
      case 'CANCEL_ISSUANCE_OF_ANOTHER_REMITTANCE':
        return 'صدور حواله دیگر';
      default:
        return item;
    }
  };

  return {
    provide: {
      translateStatus,
    },
  };
});
