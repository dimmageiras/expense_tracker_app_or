const newDate = date => (!date ? new Date() : new Date(date));

const day = date => newDate(date).getDate();
const dd = date => String(day(date)).padStart(2, "0");

const shortMonth = date => date.toLocaleString("en-us", {month: "short"});
const longMonth = date => date.toLocaleString("en-us", {month: "long"});
const month = date => newDate(date).getMonth() + 1;
const mm = date => String(month(date)).padStart(2, "0");
const monthsShort = Array.from({length: 12}, (item, i) => {
	return new Date(0, i).toLocaleString("en-US", {month: "short"});
});

const yyyy = date => newDate(date).getFullYear();

const yyyymmdd = date => yyyy(date) + "-" + mm(date) + "-" + dd(date);

const currentDay = yyyymmdd(newDate());

export {dd, shortMonth, longMonth, monthsShort, yyyy, yyyymmdd, currentDay};
