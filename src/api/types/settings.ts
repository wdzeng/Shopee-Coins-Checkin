import type { V2ResponseData } from '@/api/types'

/**
 * The settings API (https://shopee.tw/mkt/coins/api/v2/settings) response data type.
 */
export type SettingsResponseData = V2ResponseData<Data>

interface Data {
  '@timestamp': Date
  'activity_id': number
  'asset_setting': string
  'checked_in_today': boolean
  'checked_in_today_amount': number
  'checkin_list': number[]
  'dataview_type': string
  'deviceid': string
  'devicetype': string
  'fraud_detected': boolean
  'highlight': number[]
  'ip_addr': string
  'last_prize_type': number
  'logid': string
  'login': boolean
  'slot_id': number
  'subscribe': boolean
  'timestamp': number
  'today_index': number
  'uniqueid': string
  'userid': string
  'username': string
}
