import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeWithApi(api) {
  const siteSettings = api.container.lookup('site-settings:main');
  if (!siteSettings.zh_l10n_enabled) return;

  addSharingSources(api);
}

function addSharingSources(api) {
  api.addSharingSource({
    id: 'weibo',
    icon: 'weibo',
    title: I18n.t('share.weibo'),
    generateUrl(link, title) {
      return "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 370
  });

  api.addSharingSource({
    id: 'renren',
    icon: 'renren',
    title: I18n.t('share.renren'),
    generateUrl(link, title) {
      return "http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

  api.addSharingSource({
    id: 'wechat',
    icon: 'weixin',
    title: I18n.t('share.wechat'),
    generateUrl(link) {
      return "http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link);
    },
    shouldOpenInPopup: true,
    popupHeight: 200
  });

  api.addSharingSource({
    id: 'tencent_weibo',
    icon: 'tencent-weibo',
    title: I18n.t('share.tencent_weibo'),
    generateUrl(link, title) {
      return "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 200
  });

  api.addSharingSource({
    id: 'qzone',
    icon: 'qq', // need a image
    title: I18n.t('share.qzone'),
    generateUrl(link, title) {
      // http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://meta.discoursecn.org&desc=TestApi&title=theApiTest&pics=https://dn-discoursecn.qbox.me/uploads/default/4/ead61e7ddc99b2e6.png&site=http://meta.discoursecn.org
      return "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&desc=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 200
  });

  api.addSharingSource({
    id: 'douban',
    icon: '豆', // need a image
    title: I18n.t('share.douban'),
    generateUrl(link, title) {
      return "http://shuo.douban.com/!service/share?href" + encodeURIComponent(link) + "&name=" + encodeURIComponent(title) + "&text=" + encodeURIComponent(title);
    },
    shouldOpenInPopup: true,
    popupHeight: 200
  });
}

export default {
  name: 'discourse-chinese-localization-pack',

  initialize() {
    withPluginApi('0.8.23', initializeWithApi);
  }
}
