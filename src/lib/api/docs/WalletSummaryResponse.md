# WalletSummaryResponse

지갑 요약 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalKrwBalance** | **number** | 총 원화 잔액 | [default to undefined]
**wallets** | [**Array&lt;WalletResponse&gt;**](WalletResponse.md) | 지갑 목록 | [default to undefined]

## Example

```typescript
import { WalletSummaryResponse } from './api';

const instance: WalletSummaryResponse = {
    totalKrwBalance,
    wallets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
