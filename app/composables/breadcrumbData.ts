export default {

	data() {
		

		return {

		}
	},
}


export function convertIsoToDateTime(isoString: string): string {
	const date = new Date(isoString)

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZoneName: 'short',
	}
	return date.toLocaleString(undefined, options)
}
