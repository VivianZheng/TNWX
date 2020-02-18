import { InUpdateTagEvent } from './entity/msg/in/event/InUpdateTagEvent'
import { InUpdateUserEvent } from './entity/msg/in/event/InUpdateUserEvent'
/**
 * @author Javen
 * @copyright javendev@126.com
 * @description 消息适配器
 */

import { InTextMsg } from './entity/msg/in/InTextMsg'
import { OutMsg } from './entity/msg/out/OutMsg'
import { InNotDefinedMsg } from './entity/msg/in/InNotDefinedMsg'
import { InImageMsg } from './entity/msg/in/InImageMsg'
import { InVideoMsg } from './entity/msg/in/InVideoMsg'
import { InVoiceMsg } from './entity/msg/in/InVoiceMsg'
import { InShortVideoMsg } from './entity/msg/in/InShortVideoMsg'
import { InLocationMsg } from './entity/msg/in/InLocationMsg'
import { InLinkMsg } from './entity/msg/in/InLinkMsg'
import { InSpeechRecognitionResults } from './entity/msg/in/InSpeechRecognitionResults'
import { InFollowEvent } from './entity/msg/in/event/InFollowEvent'
import { InQrCodeEvent } from './entity/msg/in/event/InQrCodeEvent'
import { InLocationEvent } from './entity/msg/in/event/InLocationEvent'
import { InMenuEvent } from './entity/msg/in/event/InMenuEvent'
import { InTemplateMsgEvent } from './entity/msg/in/event/InTemplateMsgEvent'
import { InShakearoundUserShakeEvent } from './entity/msg/in/event/InShakearoundUserShakeEvent'
import { InTaskEvent } from './entity/msg/in/event/InTaskEvent'
import { InEnterAgentEvent } from './entity/msg/in/event/InEnterAgentEvent'
import { InBatchJobResultEvent } from './entity/msg/in/event/InBatchJobResultEvent'
import { InUpdatePartyEvent } from './entity/msg/in/event/InUpdatePartyEvent'
import { InSuiteTicket } from './entity/msg/in/InSuiteTicket'
import { InAuthEvent } from './entity/msg/in/InAuthEvent'
import { InMsg } from './entity/msg/in/InMsg'
import { OutTextMsg } from './entity/msg/out/OutTextMsg'

export abstract class MsgAdapter {
  // 处理文本消息
  protected processInTextMsg(inTextMsg: InTextMsg): OutMsg {
    return this.renderOutTextMsg(inTextMsg, '')
  }
  // 处理图片消息
  protected processInImageMsg(inImageMsg: InImageMsg): OutMsg {
    return this.renderOutTextMsg(inImageMsg, '')
  }
  // 处理声音消息
  protected processInVoiceMsg(inVoiceMsg: InVoiceMsg): OutMsg {
    return this.renderOutTextMsg(inVoiceMsg, '')
  }
  // 处理视频消息
  protected processInVideoMsg(inVideoMsg: InVideoMsg): OutMsg {
    return this.renderOutTextMsg(inVideoMsg, '')
  }
  // 处理小视频消息
  protected processInShortVideoMsg(inShortVideoMsg: InShortVideoMsg): OutMsg {
    return this.renderOutTextMsg(inShortVideoMsg, '')
  }
  // 处理地理位置消息
  protected processInLocationMsg(inLocationMsg: InLocationMsg): OutMsg {
    return this.renderOutTextMsg(inLocationMsg, '')
  }
  // 处理链接消息
  protected processInLinkMsg(inLinkMsg: InLinkMsg): OutMsg {
    return this.renderOutTextMsg(inLinkMsg, '')
  }
  // 处理语音识别结果
  protected processInSpeechRecognitionResults(inSpeechRecognitionResults: InSpeechRecognitionResults): OutMsg {
    return this.renderOutTextMsg(inSpeechRecognitionResults, '')
  }
  // 处理未定义的消息(其他消息...该扩展了)
  protected processIsNotDefinedMsg(inNotDefinedMsg: InNotDefinedMsg): OutMsg {
    return this.renderOutTextMsg(inNotDefinedMsg, '')
  }
  // 处理关注、取消关注事件
  protected processInFollowEvent(inFollowEvent: InFollowEvent): OutMsg {
    return this.renderOutTextMsg(inFollowEvent, '')
  }
  // 处理扫码事件
  protected processInQrCodeEvent(inQrCodeEvent: InQrCodeEvent): OutMsg {
    return this.renderOutTextMsg(inQrCodeEvent, '')
  }
  // 处理地理位置事件
  protected processInLocationEvent(inLocationEvent: InLocationEvent): OutMsg {
    return this.renderOutTextMsg(inLocationEvent, '')
  }
  // 处理地理位置事件
  protected processInMenuEvent(inMenuEvent: InMenuEvent): OutMsg {
    return this.renderOutTextMsg(inMenuEvent, '')
  }
  // 处理模板消息事件
  protected processInTemplateMsgEvent(inTemplateMsgEvent: InTemplateMsgEvent): OutMsg {
    return this.renderOutTextMsg(inTemplateMsgEvent, '')
  }
  // 处理摇一摇周边事件
  protected processInShakearoundUserShakeEvent(inShakearoundUserShakeEvent: InShakearoundUserShakeEvent): OutMsg {
    return this.renderOutTextMsg(inShakearoundUserShakeEvent, '')
  }
  // 任务卡片事件
  protected processInTaskEvent(inTaskEvent: InTaskEvent): OutMsg {
    return this.renderOutTextMsg(inTaskEvent, '')
  }
  // 进入应用
  protected processInEnterAgentEvent(inEnterAgentEvent: InEnterAgentEvent): OutMsg {
    return this.renderOutTextMsg(inEnterAgentEvent, '')
  }
  // 异步任务完成通知
  protected processInBatchJobResultEvent(inBatchJobResultEvent: InBatchJobResultEvent): OutMsg {
    return this.renderOutTextMsg(inBatchJobResultEvent, '')
  }
  // 成员变更通知
  protected processInUpdateUserEvent(inUpdateUserEvent: InUpdateUserEvent): OutMsg {
    return this.renderOutTextMsg(inUpdateUserEvent, '')
  }
  // 部门变更通知
  protected processInUpdatePartyEvent(inUpdatePartyEvent: InUpdatePartyEvent): OutMsg {
    return this.renderOutTextMsg(inUpdatePartyEvent, '')
  }
  // 标签变更通知
  protected processInUpdateTagEvent(inUpdateTagEvent: InUpdateTagEvent): OutMsg {
    return this.renderOutTextMsg(inUpdateTagEvent, '')
  }
  // 推送suite_ticket
  protected processInSuiteTicket(inSuiteTicket: InSuiteTicket): string {
    return 'success'
  }
  // 授权通知事件
  protected processInAuthEvent(inAuthEvent: InAuthEvent): string {
    return 'success'
  }

  protected renderOutTextMsg(inMsg: InMsg, content?: string): OutTextMsg {
    let outMsg = new OutTextMsg(inMsg)
    outMsg.setContent(content ? content : ' ')
    return outMsg
  }
}
