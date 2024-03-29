import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';

dayjs.extend(relativeTime);
dayjs.extend(localeData);
dayjs().localeData();

dayjs.locale('en');

export { dayjs };
