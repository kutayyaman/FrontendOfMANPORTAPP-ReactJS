import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Add User': 'Add User',
                'Passwords must match': 'Passwords must match',
                'Loading...': 'Loading...',
                'Name': 'Name',
                'Surname': 'Surname',
                'Email': 'Email',
                'Password': 'Password',
                'Re-Enter-Password': 'Re-Enter-Password',
                'Login': 'Login',
                'Home': 'Home',
                'Dashboard': 'Dashboard',
                'Management': 'Management',
                'Issues': 'Issues',
                'Links': 'Links',
                'Language': 'Language',
                'Logout': 'Logout',
                'Last Issues': 'Last Issues',
                'Something Went Wrong': 'Something Went Wrong',
                'Issues': 'Issues',
                'Previous': '< Previous',
                'Next': 'Next >',
                'Date': 'Date',
                'App Name': 'App Name',
                'Job Name': 'Job Name',
                'Impact': 'Impact',
                'Country': 'Country',
                'Description': 'Description',
                'Actions': 'Actions',
                'View': 'View',
                'Edit': 'Edit',
                'Delete': 'Delete',
                'Status': 'Status',
                'Issue Not Found': 'Issue Not Found',
                'Updated Successfully': 'Updated Successfully',
                'You Should Fill in the fields': 'You Should Fill in the fields',
                'name': 'Name',
                'Select One': 'Select One',
                'Server': 'Server',
                'Details': 'Details',
                'Remove Filter': 'Remove Filter',
                'Search': 'Search',
                'Update': 'Update',
                'An Error Occured While deleting issue': 'An Error Occured While deleting issue',
                'Application Name': 'Application Name',
                'Business Area': 'Business Area',
                'Live Plants': 'Live Plants',
                'Line Stop Risk': 'Line Stop Risk',
                'Track': 'Track',
                'There is no link for this app': 'There is no link for this app'
            }
        },
        tr: {
            translations: {
                'Add User': 'Kullanıcı Ekle',
                'Passwords must match': 'Şifreler Eşleşmiyor',
                'Loading...': 'Yükleniyor...',
                'Name': 'Ad',
                'Surname': 'Soyad',
                'Email': 'Mail adresi',
                'Password': 'Şifre',
                'Re-Enter-Password': 'Şifre tekrar',
                'Login': 'Giriş Yap',
                'Home': 'Anasayfa',
                'Dashboard': 'Panel',
                'Management': 'Yönetim',
                'Issues': 'Sorunlar',
                'Links': 'Linkler',
                'Language': 'Dil',
                'Logout': 'Çıkış Yap',
                'Last Issues': 'Son Hatalar',
                'Something Went Wrong': 'Bir şeyler yanlış gitti',
                'Issues': 'Sorunlar',
                'Previous': '< Önceki',
                'Next': 'Sonraki >',
                'Date': 'Tarih',
                'App Name': 'Uygulama Adı',
                'Job Name': 'Job Adı',
                'Impact': 'Etki',
                'Country': 'Ülke',
                'Description': 'Tanım',
                'Actions': 'Aksiyonlar',
                'View': 'Görüntüle',
                'Edit': 'Düzenle',
                'Delete': 'Sil',
                'Status': 'Durum',
                'Issue Not Found': 'Issue Bulunamadı',
                'Updated Successfully': 'Başarıyla Güncellendi',
                'You Should Fill in the fields': 'Tüm alanları doldurmalısınız.',
                'name': 'Adı',
                'Select One': 'Bir tane seçin',
                'Server': 'Sunucu',
                'Details': 'Detaylar',
                'Remove Filter': 'Filtreyi Kaldır',
                'Search': 'Ara',
                'Update': 'Güncelle',
                'An Error Occured While deleting issue': 'Issue silinirken bir hata oluştu.',
                'Application Name': 'Uygulama Adı',
                'Business Area': 'İş Alanı',
                'Live Plants': 'Çalıştığı Serverlar',
                'Line Stop Risk': 'Hat Durdurma Riski',
                'Track': 'Takip Edilme',
                'There is no link for this app': 'Bu uygulamaya ait bir link yok'
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});
export default i18n;