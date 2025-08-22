# CheckoutSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workshopId** | **string** | ID of the workshop to book | [default to undefined]
**successUrl** | **string** | URL to redirect to after successful payment | [default to undefined]
**cancelUrl** | **string** | URL to redirect to if payment is canceled | [default to undefined]
**connectAccountId** | **string** | Stripe Connect account ID of the workshop host | [default to undefined]

## Example

```typescript
import { CheckoutSessionRequest } from './api';

const instance: CheckoutSessionRequest = {
    workshopId,
    successUrl,
    cancelUrl,
    connectAccountId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
