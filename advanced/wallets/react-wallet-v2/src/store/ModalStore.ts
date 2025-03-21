import { SessionTypes, SignClientTypes } from '@walletconnect/types'
import { WalletKitTypes } from '@reown/walletkit'
import { proxy } from 'valtio'

/**
 * Types
 */
interface ModalData {
  proposal?: SignClientTypes.EventArguments['session_proposal']
  requestEvent?: SignClientTypes.EventArguments['session_request']
  requestSession?: SessionTypes.Struct
  loadingMessage?: string
  authRequest?: SignClientTypes.EventArguments['session_authenticate']
}

interface State {
  open: boolean
  view?:
    | 'SessionProposalModal'
    | 'SessionSignModal'
    | 'SessionSignTypedDataModal'
    | 'SessionSendTransactionModal'
    | 'SessionGrantPermissionsModal'
    | 'SessionSendCallsModal'
    | 'SessionUnsuportedMethodModal'
    | 'SessionSignCosmosModal'
    | 'SessionSignSolanaModal'
    | 'SessionSignPolkadotModal'
    | 'SessionSignNearModal'
    | 'SessionSignMultiversxModal'
    | 'SessionSignTronModal'
    | 'SessionSignTezosModal'
    | 'SessionSignKadenaModal'
    | 'SessionAuthenticateModal'
    | 'LoadingModal'
    | 'SessionSignBip122Modal'
    | 'SessionGetBip122AddressesModal'
    | 'SessionSendTransactionBip122Modal'
  data?: ModalData
}

/**
 * State
 */
const state = proxy<State>({
  open: false
})

/**
 * Store / Actions
 */
const ModalStore = {
  state,

  open(view: State['view'], data: State['data']) {
    state.view = view
    state.data = data
    state.open = true
  },

  close() {
    state.open = false
  }
}

export default ModalStore
