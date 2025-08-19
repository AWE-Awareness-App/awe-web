# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**role** | **string** |  | [default to RoleEnum_Patient]
**isCounsellor** | **boolean** |  | [optional] [default to false]
**reference** | **string** |  | [optional] [default to undefined]
**linkedIn** | **string** |  | [optional] [default to undefined]
**stripeId** | **string** |  | [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]
**profileImageUrl** | **string** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**occupation** | **string** |  | [optional] [default to undefined]
**certification** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    id,
    firstName,
    lastName,
    email,
    role,
    isCounsellor,
    reference,
    linkedIn,
    stripeId,
    phoneNumber,
    createdAt,
    updatedAt,
    profileImageUrl,
    gender,
    occupation,
    certification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
