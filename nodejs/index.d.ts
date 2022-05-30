/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface ConfigParams {
  /** App Key */
  appKey: string
  /** App Secret */
  appSecret: string
  /** Access Token */
  accessToken: string
  /** HTTP API url (default: "https://openapi.longbridgeapp.com") */
  httpUrl?: string
  /**
   * Websocket url for quote API (default:
   * "wss://openapi-quote.longbridgeapp.com")
   */
  quoteWsUrl?: string
  /**
   * Websocket url for trade API (default:
   * "wss://openapi-trade.longbridgeapp.com")
   */
  tradeWsUrl?: string
}
/** Derivative type */
export const enum DerivativeType {
  /** US stock options */
  Option = 0,
  /** HK warrants */
  Warrant = 1
}
export const enum TradeStatus {
  /** Normal */
  Normal = 0,
  /** Suspension */
  Halted = 1,
  /** Delisted */
  Delisted = 2,
  /** Fuse */
  Fuse = 3,
  /** Prepare List */
  PrepareList = 4,
  /** Code Moved */
  CodeMoved = 5,
  /** To Be Opened */
  ToBeOpened = 6,
  /** Split Stock Halts */
  SplitStockHalts = 7,
  /** Expired */
  Expired = 8,
  /** Warrant To BeListed */
  WarrantPrepareList = 9,
  /** Warrant To BeListed */
  Suspend = 10
}
/** Trade session */
export const enum TradeSession {
  /** Trading */
  Normal = 0,
  /** Pre-Trading */
  Pre = 1,
  /** Post-Trading */
  Post = 2
}
/** Quote type of subscription */
export const enum SubType {
  /** Quote */
  Quote = 0,
  /** Depth */
  Depth = 1,
  /** Brokers */
  Brokers = 2,
  /** Trade */
  Trade = 3
}
/** Trade direction */
export const enum TradeDirection {
  /** Neutral */
  Neutral = 0,
  /** Down */
  Down = 1,
  /** Up */
  Up = 2
}
/** Option type */
export const enum OptionType {
  /** Unknown */
  Unknown = 0,
  /** American */
  American = 1,
  /** Europe */
  Europe = 2
}
/** Option direction */
export const enum OptionDirection {
  /** Unknown */
  Unknown = 0,
  /** Put */
  Put = 1,
  /** Call */
  Call = 2
}
/** Warrant type */
export const enum WarrantType {
  /** Unknown */
  Unknown = 0,
  /** Call */
  Call = 1,
  /** Put */
  Put = 2,
  /** Bull */
  Bull = 3,
  /** Bear */
  Bear = 4,
  /** Inline */
  Inline = 5
}
/** Candlestick period */
export const enum Period {
  /** One Minute */
  Min_1 = 0,
  /** Five Minutes */
  Min_5 = 1,
  /** Fifteen Minutes */
  Min_15 = 2,
  /** Thirty Minutes */
  Min_30 = 3,
  /** Sixty Minutes */
  Min_60 = 4,
  /** One Days */
  Day = 5,
  /** One Week */
  Week = 6,
  /** One Month */
  Month = 7,
  /** One Year */
  Year = 8
}
/** Candlestick adjustment type */
export const enum AdjustType {
  /** Actual */
  NoAdjust = 0,
  /** Adjust forward */
  ForwardAdjust = 1
}
export function sleep(milliseconds: number): Promise<void>
/** Topic type */
export const enum TopicType {
  /** Private notification for trade */
  Private = 0
}
export const enum OrderStatus {
  /** Unknown */
  Unknown = 0,
  /** Not reported */
  NotReported = 1,
  /** Not reported (Replaced Order) */
  ReplacedNotReported = 2,
  /** Not reported (Protected Order) */
  ProtectedNotReported = 3,
  /** Not reported (Conditional Order) */
  VarietiesNotReported = 4,
  /** Filled */
  Filled = 5,
  /** Wait To New */
  WaitToNew = 6,
  /** New */
  New = 7,
  /** Wait To Replace */
  WaitToReplace = 8,
  /** Pending Replace */
  PendingReplace = 9,
  /** Replaced */
  Replaced = 10,
  /** Partial Filled */
  PartialFilled = 11,
  /** Wait To Cancel */
  WaitToCancel = 12,
  /** Pending Cancel */
  PendingCancel = 13,
  /** Rejected */
  Rejected = 14,
  /** Canceled */
  Canceled = 15,
  /** Expired */
  Expired = 16,
  /** Partial Withdrawal */
  PartialWithdrawal = 17
}
export const enum OrderSide {
  /** Unknown */
  Unknown = 0,
  /** Buy */
  Buy = 1,
  /** Sell */
  Sell = 2
}
export const enum OrderType {
  /** Unknown */
  Unknown = 0,
  /** Limit Order */
  LO = 1,
  /** Enhanced Limit Order */
  ELO = 2,
  /** Market Order */
  MO = 3,
  /** At-auction Order */
  AO = 4,
  /** At-auction Limit Order */
  ALO = 5,
  /** Odd Lots */
  ODD = 6,
  /** Limit If Touched */
  LIT = 7,
  /** Market If Touched */
  MIT = 8,
  /** Trailing Limit If Touched (Trailing Amount) */
  TSLPAMT = 9,
  /** Trailing Limit If Touched (Trailing Percent) */
  TSLPPCT = 10,
  /** Trailing Market If Touched (Trailing Amount) */
  TSMAMT = 11,
  /** Trailing Market If Touched (Trailing Percent) */
  TSMPCT = 12
}
/** Order tag */
export const enum OrderTag {
  /** Unknown */
  Unknown = 0,
  /** Normal Order */
  Normal = 1,
  /** Long term Order */
  LongTerm = 2,
  /** Grey Order */
  Grey = 3
}
/** Time in force type */
export const enum TimeInForceType {
  /** Unknown */
  Unknown = 0,
  /** Day Order */
  Day = 1,
  /** Good Til Canceled Order */
  GoodTilCanceled = 2,
  /** Good Til Date Order */
  GoodTilDate = 3
}
/** Trigger status */
export const enum TriggerStatus {
  /** Unknown */
  Unknown = 0,
  /** Deactive */
  Deactive = 1,
  /** Active */
  Active = 2,
  /** Released */
  Released = 3
}
/** Enable or disable outside regular trading hours */
export const enum OutsideRTH {
  /** Unknown */
  Unknown = 0,
  /** Regular trading hour only */
  RTHOnly = 1,
  /** Any time */
  AnyTime = 2
}
export const enum BalanceType {
  /** Unknown */
  Unknown = 0,
  /** Limit Order */
  Cash = 1,
  /** Stock */
  Stock = 2,
  /** Fund */
  Fund = 3
}
export const enum CashFlowDirection {
  /** Unknown */
  Unknown = 0,
  /** Out */
  Out = 1,
  /** Stock */
  In = 2
}
export const enum Market {
  /** Unknown */
  Unknown = 0,
  /** US market */
  US = 1,
  /** HK market */
  HK = 2,
  /** CN market */
  CN = 3,
  /** SG market */
  SG = 4
}
export class Config {
  /** Create a new `Config` */
  constructor(params: ConfigParams)
  /** Create a new `Config` from the given environment variables */
  static fromEnv(): Config
}
export class Decimal {
  static new(value: string): Decimal
}
/** Trade context */
export class QuoteContext {
  static new(config: Config): Promise<QuoteContext>
  set onQuote(callback: (err: null | Error, event: PushQuoteEvent) => void)
  set onDepth(callback: (err: null | Error, event: PushDepthEvent) => void)
  set onBrokers(callback: (err: null | Error, event: PushBrokersEvent) => void)
  set onTrades(callback: (err: null | Error, event: PushTradesEvent) => void)
  /** Subscribe */
  subscribe(symbols: Array<string>, subTypes: Array<SubType>, isFirstPush: boolean): Promise<void>
  /** Unsubscribe */
  unsubscribe(symbols: Array<string>, subTypes: Array<SubType>): Promise<void>
  /** Get basic information of securities */
  staticInfo(symbols: Array<string>): Promise<Array<SecurityStaticInfo>>
  /** Get quote of securities */
  quote(symbols: Array<string>): Promise<Array<SecurityQuote>>
  /** Get quote of option securities */
  optionQuote(symbols: Array<string>): Promise<Array<OptionQuote>>
  /** Get quote of warrant securities */
  warrantQuote(symbols: Array<string>): Promise<Array<WarrantQuote>>
  /** Get security depth */
  depth(symbol: string): Promise<SecurityDepth>
  /** Get security brokers */
  brokers(symbol: string): Promise<SecurityBrokers>
  /** Get participants */
  participants(): Promise<Array<ParticipantInfo>>
  /** Get security trades */
  trades(symbol: string, count: number): Promise<Array<Trade>>
  /** Get security intraday */
  intraday(symbol: string): Promise<Array<IntradayLine>>
  /** Get security candlesticks */
  candlesticks(symbol: string, period: Period, count: number, adjustType: AdjustType): Promise<Array<Candlestick>>
  /** Get option chain expiry date list */
  optionChainExpiryDateList(symbol: string): Promise<Array<NaiveDate>>
  /** Get option chain info by date */
  optionChainInfoByDate(symbol: string, expiryDate: NaiveDate): Promise<Array<StrikePriceInfo>>
  /** Get warrant issuers */
  warrantIssuers(): Promise<Array<IssuerInfo>>
  /** Get trading session of the day */
  tradingSession(): Promise<Array<MarketTradingSession>>
  /** Get trading session of the day */
  tradingDays(market: Market, begin: NaiveDate, end: NaiveDate): Promise<MarketTradingDays>
  /** Get real-time quote */
  realtimeQuote(symbols: Array<string>): Promise<Array<RealtimeQuote>>
  /** Get real-time depth */
  realtimeDepth(symbol: string): Promise<SecurityDepth>
  /** Get real-time brokers */
  realtimeBrokers(symbol: string): Promise<SecurityBrokers>
  /** Get real-time trades */
  realtimeTrades(symbol: string, count: number): Promise<Array<Trade>>
}
export class PushQuoteEvent {
  get symbol(): string
  get data(): PushQuote
}
export class PushDepthEvent {
  get symbol(): string
  get data(): PushDepth
}
export class PushBrokersEvent {
  get symbol(): string
  get data(): PushBrokers
}
export class PushTradesEvent {
  get symbol(): string
  get data(): PushTrades
}
/** The basic information of securities */
export class SecurityStaticInfo {
  /** Security code */
  get symbol(): string
  /** Security name (zh-CN) */
  get nameCn(): string
  /** Security name (en) */
  get nameEn(): string
  /** Security name (zh-HK) */
  get nameHk(): string
  /** Exchange which the security belongs to */
  get exchange(): string
  /** Trading currency */
  get currency(): string
  /** Lot size */
  get lotSize(): number
  /** Total shares */
  get totalShares(): number
  /** Circulating shares */
  get circulatingShares(): number
  /** HK shares (only HK stocks) */
  get hkShares(): number
  /** Earnings per share */
  get eps(): Decimal
  /** Earnings per share (TTM) */
  get epsTtm(): Decimal
  /** Net assets per share */
  get bps(): Decimal
  /** Dividend yield */
  get dividendYield(): Decimal
  /** Types of supported derivatives */
  get stockDerivatives(): Array<DerivativeType>
}
/** Quote of US pre/post market */
export class PrePostQuote {
  /** Latest price */
  get lastDone(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Close of the last trade session */
  get prevClose(): Decimal
}
/** Quote of securitity */
export class SecurityQuote {
  /** Security code */
  get symbol(): string
  /** Latest price */
  get lastDone(): Decimal
  /** Yesterday's close */
  get prevClose(): Decimal
  /** Open */
  get open(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Security trading status */
  get tradeStatus(): TradeStatus
  /** Quote of US pre market */
  get preMarketQuote(): PrePostQuote | null
  /** Quote of US post market */
  get postMarketQuote(): PrePostQuote | null
}
/** Quote of option */
export class OptionQuote {
  /** Security code */
  get symbol(): string
  /** Latest price */
  get lastDone(): Decimal
  /** Yesterday's close */
  get prevClose(): Decimal
  /** Open */
  get open(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Security trading status */
  get tradeStatus(): TradeStatus
  /** Implied volatility */
  get impliedVolatility(): Decimal
  /** Number of open positions */
  get openInterest(): number
  /** Exprity date */
  get expiryDate(): NaiveDate
  /** Strike price */
  get strikePrice(): Decimal
  /** Contract multiplier */
  get contractMultiplier(): Decimal
  /** Option type */
  get contractType(): OptionType
  /** Contract size */
  get contractSize(): Decimal
  /** Option direction */
  get direction(): OptionDirection
  /** Underlying security historical volatility of the option */
  get historicalVolatility(): Decimal
  /** Underlying security symbol of the option */
  get underlyingSymbol(): string
}
/** Quote of warrant */
export class WarrantQuote {
  /** Security code */
  get symbol(): string
  /** Latest price */
  get lastDone(): Decimal
  /** Yesterday's close */
  get prevClose(): Decimal
  /** Open */
  get open(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Security trading status */
  get tradeStatus(): TradeStatus
  /** Implied volatility */
  get impliedVolatility(): Decimal
  /** Exprity date */
  get expiryDate(): NaiveDate
  /** Last tradalbe date */
  get lastTradeDate(): NaiveDate
  /** Outstanding ratio */
  get outstandingRatio(): Decimal
  /** Outstanding quantity */
  get outstandingQty(): number
  /** Conversion ratio */
  get conversionRatio(): Decimal
  /** Warrant type */
  get category(): WarrantType
  /** Strike price */
  get strikePrice(): Decimal
  /** Upper bound price */
  get upperStrikePrice(): Decimal
  /** Lower bound price */
  get lowerStrikePrice(): Decimal
  /** Call price */
  get callPrice(): Decimal
  /** Underlying security symbol of the warrant */
  get underlyingSymbol(): string
}
/** Depth */
export class Depth {
  /** Position */
  get position(): number
  /** Price */
  get price(): Decimal
  /** Volume */
  get volume(): number
  /** Number of orders */
  get orderNum(): number
}
/** Security depth */
export class SecurityDepth {
  /** Ask depth */
  get asks(): Array<Depth>
  /** Bid depth */
  get bids(): Array<Depth>
}
/** Brokers */
export class Brokers {
  /** Position */
  get position(): number
  /** Broker IDs */
  get brokerIds(): Array<number>
}
/** Security brokers */
export class SecurityBrokers {
  /** Ask brokers */
  get askBrokers(): Array<Brokers>
  /** Bid brokers */
  get bidBrokers(): Array<Brokers>
}
/** Participant info */
export class ParticipantInfo {
  /** Broker IDs */
  get brokerIds(): Array<number>
  /** Participant name (zh-CN) */
  get nameCn(): string
  /** Participant name (en) */
  get nameEn(): string
  /** Participant name (zh-HK) */
  get nameHk(): string
}
/** Trade */
export class Trade {
  /** Price */
  get price(): Decimal
  /** Volume */
  get volume(): number
  /** Time of trading */
  get timestamp(): Date
  /** Trade type */
  get tradeType(): string
  /** Trade direction */
  get direction(): TradeDirection
  /** Trade session */
  get tradeSession(): TradeSession
}
/** Intraday line */
export class IntradayLine {
  /** Close price of the minute */
  get price(): Decimal
  /** Start time of the minute */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Average price */
  get avgPrice(): Decimal
}
/** Candlestick */
export class Candlestick {
  /** Close price */
  get close(): Decimal
  /** Open price */
  get open(): Decimal
  /** Low price */
  get low(): Decimal
  /** High price */
  get high(): Decimal
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Timestamp */
  get timestamp(): Date
}
/** Strike price info */
export class StrikePriceInfo {
  /** Strike price */
  get price(): Decimal
  /** Security code of call option */
  get callSymbol(): string
  /** Security code of put option */
  get putSymbol(): string
  /** Is standard */
  get standard(): boolean
}
/** Issuer info */
export class IssuerInfo {
  /** Issuer ID */
  get issuerId(): number
  /** Issuer name (zh-CN) */
  get nameCn(): string
  /** Issuer name (en) */
  get nameEn(): string
  /** Issuer name (zh-HK) */
  get nameHk(): string
}
/** The information of trading session */
export class TradingSessionInfo {
  /** Being trading time */
  get beginTime(): Time
  /** End trading time */
  get endTime(): Time
  /** Trading session */
  get tradeSession(): TradeSession
}
/** Market trading session */
export class MarketTradingSession {
  /** Market */
  get market(): Market
  /** Trading session */
  get tradeSession(): Array<TradingSessionInfo>
}
/** Real-time quote */
export class RealtimeQuote {
  /** Security code */
  get symbol(): string
  /** Latest price */
  get lastDone(): Decimal
  /** Open */
  get open(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Security trading status */
  get tradeStatus(): TradeStatus
}
/** Push real-time quote */
export class PushQuote {
  /** Latest price */
  get lastDone(): Decimal
  /** Open */
  get open(): Decimal
  /** High */
  get high(): Decimal
  /** Low */
  get low(): Decimal
  /** Time of latest price */
  get timestamp(): Date
  /** Volume */
  get volume(): number
  /** Turnover */
  get turnover(): Decimal
  /** Security trading status */
  get tradeStatus(): TradeStatus
  /** Trade session, */
  get tradeSession(): TradeSession
}
/** Push real-time depth */
export class PushDepth {
  /** Ask depth */
  get asks(): Array<Depth>
  /** Bid depth */
  get bids(): Array<Depth>
}
/** Push real-time brokers */
export class PushBrokers {
  /** Ask brokers */
  get askBrokers(): Array<Brokers>
  /** Bid brokers */
  get bidBrokers(): Array<Brokers>
}
/** Push real-time trades */
export class PushTrades {
  /** Trades data */
  get trades(): Array<Trade>
}
/** Market trading days */
export class MarketTradingDays {
  /** Trading days */
  get tradingDays(): Array<NaiveDate>
  /** Half trading days */
  get halfTradingDays(): Array<NaiveDate>
}
/** Naive date type */
export class NaiveDate {
  constructor(year: number, month: number, day: number)
  get year(): number
  get month(): number
  get day(): number
}
/** Naive date type */
export class Time {
  constructor(hour: number, minute: number, second: number)
  get hour(): number
  get monute(): number
  get second(): number
}
/** Trade context */
export class TradeContext {
  static new(config: Config): Promise<TradeContext>
  set onOrderChanged(callback: (err: null | Error, event: PushOrderChanged) => void)
  /** Subscribe */
  subscribe(topics: Array<TopicType>): Promise<void>
  /** Unsubscribe */
  unsubscribe(topics: Array<TopicType>): Promise<void>
  /** Get history executions */
  historyExecutions(opts?: GetHistoryExecutionsOptions | undefined | null): Promise<Array<Execution>>
  /** Get today executions */
  todayExecutions(opts?: GetTodayExecutionsOptions | undefined | null): Promise<Array<Execution>>
  /** Get history orders */
  historyOrders(opts?: GetHistoryOrdersOptions | undefined | null): Promise<Array<Order>>
  /** Get today orders */
  todayOrders(opts?: GetTodayOrdersOptions | undefined | null): Promise<Array<Order>>
  /** Replace order */
  replaceOrder(opts: ReplaceOrderOptions): Promise<void>
  /** Submit order */
  submitOrder(opts: SubmitOrderOptions): Promise<SubmitOrderResponse>
  /** Withdraw order */
  withdrawOrder(orderId: string): Promise<void>
  /** Get account balance */
  accountBalance(): Promise<Array<AccountBalance>>
  /** Get cash flow */
  cashFlow(opts: GetCashFlowOptions): Promise<Array<CashFlow>>
  /** Get fund positions */
  fundPositions(symbols?: Array<string> | undefined | null): Promise<FundPositionsResponse>
  /** Get stock positions */
  stockPositions(symbols?: Array<string> | undefined | null): Promise<StockPositionsResponse>
}
/** Options for submit order request */
export class GetCashFlowOptions {
  /** Create a new `GetCashFlowOptions` */
  constructor(startAt: Date, endAt: Date)
  /** Set the business type */
  businessType(businessType: BalanceType): GetCashFlowOptions
  /** Set the security symbol */
  symbol(symbol: string): GetCashFlowOptions
  /** Set the page number */
  page(page: number): GetCashFlowOptions
  /** Set the page size */
  size(size: number): GetCashFlowOptions
}
/** Options for get histroy executions request */
export class GetHistoryExecutionsOptions {
  /** Create a new `GetHistoryExecutionsOptions` */
  constructor()
  /** Set the security symbol */
  symbol(symbol: string): GetHistoryExecutionsOptions
  /** Set the start time */
  startAt(startAt: Date): GetHistoryExecutionsOptions
  /** Set the end time */
  endAt(endAt: Date): GetHistoryExecutionsOptions
}
/** Options for get histroy orders request */
export class GetHistoryOrdersOptions {
  /** Create a new `GetHistoryOrdersOptions` */
  constructor()
  /** Set the security symbol */
  symbol(symbol: string): GetHistoryOrdersOptions
  /** Set the order status */
  status(status: OrderStatus | Array<OrderStatus>): GetHistoryOrdersOptions
  /** Set the order side */
  side(side: OrderSide): GetHistoryOrdersOptions
  /** Set the market */
  market(market: Market): GetHistoryOrdersOptions
  /** Set the start time */
  startAt(startAt: Date): GetHistoryOrdersOptions
  /** Set the end time */
  endAt(endAt: Date): GetHistoryOrdersOptions
}
/** Options for get histroy executions request */
export class GetTodayExecutionsOptions {
  /** Create a new `GetTodayExecutionsOptions` */
  constructor()
  /** Set the security symbol */
  symbol(symbol: string): GetTodayExecutionsOptions
  /** Set the order id */
  orderId(orderId: string): GetTodayExecutionsOptions
}
/** Options for get today orders request */
export class GetTodayOrdersOptions {
  /** Create a new `GetTodayOrdersOptions` */
  constructor()
  /** Set the security symbol */
  symbol(symbol: string): GetTodayOrdersOptions
  /** Set the order status */
  status(status: OrderStatus | Array<OrderStatus>): GetTodayOrdersOptions
  /** Set the order side */
  side(side: OrderSide): GetTodayOrdersOptions
  /** Set the market */
  market(market: Market): GetTodayOrdersOptions
}
/** Options for get today orders request */
export class ReplaceOrderOptions {
  /** Create a new `ReplaceOrderOptions` */
  constructor(orderId: string, quantity: Decimal)
  /** Set the price */
  price(price: Decimal): ReplaceOrderOptions
  /** Set the trigger price */
  triggerPrice(triggerPrice: Decimal): ReplaceOrderOptions
  /** Set the limit offset */
  limitOffset(limitOffset: Decimal): ReplaceOrderOptions
  /** Set the trailing amount */
  trailingAmount(trailingAmount: Decimal): ReplaceOrderOptions
  /** Set the trailing percent */
  trailingPercent(trailingPercent: Decimal): ReplaceOrderOptions
  /** Set the remark */
  remark(remark: string): ReplaceOrderOptions
}
/** Options for submit order request */
export class SubmitOrderOptions {
  /** Create a new `SubmitOrderOptions` */
  constructor(symbol: string, orderType: OrderType, side: OrderSide, submittedQuantity: Decimal, timeInForce: TimeInForceType)
  /** Set the submitted price */
  submittedPrice(submittedPrice: Decimal): SubmitOrderOptions
  /** Set the trigger price */
  triggerPrice(triggerPrice: Decimal): SubmitOrderOptions
  /** Set the limit offset */
  limitOffset(limitOffset: Decimal): SubmitOrderOptions
  /** Set the trailing amount */
  trailingAmount(trailingAmount: Decimal): SubmitOrderOptions
  /** Set the trailing percent */
  trailingPercent(trailingPercent: Decimal): SubmitOrderOptions
  /** Set the expire date */
  expireDate(expireDate: NaiveDate): SubmitOrderOptions
  /** Enable or disable outside regular trading hours */
  outsideRth(outsideRth: OutsideRTH): SubmitOrderOptions
  /** Set the remark */
  remark(remark: string): SubmitOrderOptions
}
/** Trade */
export class Execution {
  /** Order ID */
  get orderId(): string
  /** Execution ID */
  get tradeId(): string
  /** Security code */
  get symbol(): string
  /** Trade done time */
  get tradeDoneAt(): Date
  /** Executed quantity */
  get quantity(): Decimal
  /** Executed price */
  get price(): Decimal
}
/** Order */
export class Order {
  /** Order ID */
  get orderId(): string
  /** Order status */
  get status(): OrderStatus
  /** Stock name */
  get stockName(): string
  /** Submitted quantity */
  get quantity(): Decimal
  /** Executed quantity */
  get executedQuantity(): Decimal | null
  /** Submitted price */
  get price(): Decimal | null
  /** Executed price */
  get executedPrice(): Decimal | null
  /** Submitted time */
  get submittedAt(): Date
  /** Order side */
  get side(): OrderSide
  /** Security code */
  get symbol(): string
  /** Order type */
  get orderType(): OrderType
  /** Last done */
  get lastDone(): Decimal | null
  /** `LIT` / `MIT` Order Trigger Price */
  get triggerPrice(): Decimal | null
  /** Rejected Message or remark */
  get msg(): string
  /** Order tag */
  get tag(): OrderTag
  /** Time in force type */
  get timeInForce(): TimeInForceType
  /** Long term order expire date */
  get expireDate(): NaiveDate | null
  /** Last updated time */
  get updatedAt(): Date | null
  /** Conditional order trigger time */
  get triggerAt(): Date | null
  /** `TSMAMT` / `TSLPAMT` order trailing amount */
  get trailingAmount(): Decimal | null
  /** `TSMPCT` / `TSLPPCT` order trailing percent */
  get trailingPercent(): Decimal | null
  /** `TSLPAMT` / `TSLPPCT` order limit offset amount */
  get limitOffset(): Decimal | null
  /** Conditional order trigger status */
  get triggerStatus(): TriggerStatus | null
  /** Currency */
  get currency(): string
  /** Enable or disable outside regular trading hours */
  get outsideRth(): OutsideRTH | null
}
/** Order changed message */
export class PushOrderChanged {
  /** Order side */
  get side(): OrderSide
  /** Stock name */
  get stockName(): string
  /** Submitted quantity */
  get quantity(): string
  /** Order symbol */
  get symbol(): string
  /** Order type */
  get orderType(): OrderType
  /** Submitted price */
  get price(): Decimal
  /** Executed quantity */
  get executedQuantity(): number
  /** Executed price */
  get executedPrice(): Decimal
  /** Order ID */
  get orderId(): string
  /** Currency */
  get currency(): string
  /** Order status */
  get status(): OrderStatus
  /** Submitted time */
  get submittedAt(): Date
  /** Last updated time */
  get updatedAt(): Date
  /** Order trigger price */
  get triggerPrice(): Decimal | null
  /** Rejected message or remark */
  get msg(): string
  /** Order tag */
  get tag(): OrderTag
  /** Conditional order trigger status */
  get triggerStatus(): TriggerStatus | null
  /** Conditional order trigger time */
  get triggerAt(): Date | null
  /** Trailing amount */
  get trailingAmount(): Decimal | null
  /** Trailing percent */
  get trailingPercent(): Decimal | null
  /** Limit offset amount */
  get limitOffset(): Decimal | null
  /** Account no */
  get accountNo(): string
}
/** Response for withdraw order request */
export class SubmitOrderResponse {
  /** Order id */
  get orderId(): string
}
/** Account balance */
export class CashInfo {
  /** Withdraw cash */
  get withdrawCash(): Decimal
  /** Available cash */
  get availableCash(): Decimal
  /** Frozen cash */
  get frozenCash(): Decimal
  /** Cash to be settled */
  get settlingCash(): Decimal
  /** Currency */
  get currency(): string
}
/** Account balance */
export class AccountBalance {
  /** Total cash */
  get totalCash(): Decimal
  /** Maximum financing amount */
  get maxFinanceAmount(): Decimal
  /** Remaining financing amount */
  get remainingFinanceAmount(): Decimal
  /** Risk control level */
  get riskLevel(): number | null
  /** Margin call */
  get marginCall(): Decimal
  /** Currency */
  get currency(): string
  /** Cash details */
  get cashInfos(): Array<CashInfo>
}
/** Account balance */
export class CashFlow {
  /** Cash flow name */
  get transactionFlowName(): string
  /** Outflow direction */
  get direction(): CashFlowDirection
  /** Balance type */
  get businessType(): BalanceType
  /** Cash amount */
  get balance(): Decimal
  /** Cash currency */
  get currency(): string
  /** Business time */
  get businessTime(): Date
  /** Associated Stock code information */
  get symbol(): string | null
  /** Cash flow description */
  get description(): string
}
/** Fund positions response */
export class FundPositionsResponse {
  get channels(): Array<FundPositionChannel>
}
/** Fund position channel */
export class FundPositionChannel {
  /** Account type */
  get accountChannel(): string
  /** Fund positions */
  get positions(): Array<FundPosition>
}
/** Fund position */
export class FundPosition {
  /** Fund ISIN code */
  get symbol(): string
  /** Current equity */
  get currentNetAssetValue(): Decimal
  /** Current equity time */
  get netAssetValueDay(): Date
  /** Fund name */
  get symbolName(): string
  /** Currency */
  get currency(): string
  /** Net cost */
  get costNetAssetValue(): Decimal
  /** Holding units */
  get holdingUnits(): Decimal
}
/** Stock positions response */
export class StockPositionsResponse {
  get channels(): Array<StockPositionChannel>
}
/** Stock position channel */
export class StockPositionChannel {
  /** Account type */
  get accountChannel(): string
  /** Fund details */
  get positions(): Array<StockPosition>
}
/** Stock position */
export class StockPosition {
  /** Stock code */
  get symbol(): string
  /** Stock name */
  get symbolName(): string
  /** The number of holdings */
  get quantity(): Decimal
  /** Available quantity */
  get availableQuality(): Decimal
  /** Currency */
  get currency(): string
  /**
   * Cost Price(According to the client's choice of average purchase or
   * diluted cost)
   */
  get costPrice(): Decimal
}
