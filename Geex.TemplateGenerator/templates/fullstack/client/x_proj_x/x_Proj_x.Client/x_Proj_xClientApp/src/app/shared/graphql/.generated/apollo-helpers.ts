import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type BlobObjectKeySpecifier = ('id' | 'createdOn' | 'modifiedOn' | 'fileName' | 'md5' | 'url' | 'fileSize' | 'mimeType' | 'storageType' | BlobObjectKeySpecifier)[];
export type BlobObjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	md5?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	storageType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlobObjectCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | BlobObjectCollectionSegmentKeySpecifier)[];
export type BlobObjectCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CaptchaKeySpecifier = ('captchaType' | 'key' | 'bitmap' | CaptchaKeySpecifier)[];
export type CaptchaFieldPolicy = {
	captchaType?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	bitmap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionSegmentInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | CollectionSegmentInfoKeySpecifier)[];
export type CollectionSegmentInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteResultKeySpecifier = ('deletedCount' | 'isAcknowledged' | DeleteResultKeySpecifier)[];
export type DeleteResultFieldPolicy = {
	deletedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	isAcknowledged?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FrontendCallKeySpecifier = ('data' | 'frontendCallType' | FrontendCallKeySpecifier)[];
export type FrontendCallFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	frontendCallType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HintTypeKeySpecifier = ('_' | HintTypeKeySpecifier)[];
export type HintTypeFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IAuditEntityKeySpecifier = ('auditStatus' | 'submittable' | 'id' | 'createdOn' | IAuditEntityKeySpecifier)[];
export type IAuditEntityFieldPolicy = {
	auditStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	submittable?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IBlobObjectKeySpecifier = ('fileName' | 'md5' | 'fileSize' | 'mimeType' | 'url' | 'storageType' | 'id' | 'createdOn' | IBlobObjectKeySpecifier)[];
export type IBlobObjectFieldPolicy = {
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	md5?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	storageType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IEntityBaseKeySpecifier = ('id' | 'createdOn' | IEntityBaseKeySpecifier)[];
export type IEntityBaseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IFrontendCallKeySpecifier = ('data' | 'frontendCallType' | IFrontendCallKeySpecifier)[];
export type IFrontendCallFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	frontendCallType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IMessageKeySpecifier = ('fromUserId' | 'messageType' | 'content' | 'toUserIds' | 'severity' | 'title' | 'time' | 'id' | 'createdOn' | IMessageKeySpecifier)[];
export type IMessageFieldPolicy = {
	fromUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageType?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	toUserIds?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IMessageContentKeySpecifier = ('_' | IMessageContentKeySpecifier)[];
export type IMessageContentFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IOrgKeySpecifier = ('allParentOrgCodes' | 'allSubOrgCodes' | 'directSubOrgCodes' | 'parentOrgCode' | 'code' | 'name' | 'orgType' | 'allParentOrgs' | 'allSubOrgs' | 'directSubOrgs' | 'parentOrg' | 'id' | 'createdOn' | IOrgKeySpecifier)[];
export type IOrgFieldPolicy = {
	allParentOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IPagedListKeySpecifier = ('pageIndex' | 'pageSize' | 'totalPage' | 'totalCount' | IPagedListKeySpecifier)[];
export type IPagedListFieldPolicy = {
	pageIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IRoleKeySpecifier = ('name' | 'code' | 'users' | 'permissions' | 'isDefault' | 'isStatic' | 'isEnabled' | 'id' | 'createdOn' | IRoleKeySpecifier)[];
export type IRoleFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isStatic?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ISettingKeySpecifier = ('scope' | 'scopedKey' | 'value' | 'name' | 'id' | 'createdOn' | ISettingKeySpecifier)[];
export type ISettingFieldPolicy = {
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	scopedKey?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ITenantKeySpecifier = ('code' | 'name' | 'isEnabled' | 'id' | 'createdOn' | ITenantKeySpecifier)[];
export type ITenantFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ITenantCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | ITenantCollectionSegmentKeySpecifier)[];
export type ITenantCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUserKeySpecifier = ('checkPassword' | 'phoneNumber' | 'username' | 'nickname' | 'email' | 'loginProvider' | 'openId' | 'isEnable' | 'roleIds' | 'orgCodes' | 'id' | 'createdOn' | IUserKeySpecifier)[];
export type IUserFieldPolicy = {
	checkPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	openId?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnable?: FieldPolicy<any> | FieldReadFunction<any>,
	roleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	orgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('id' | 'createdOn' | 'modifiedOn' | 'fromUserId' | 'messageType' | 'content' | 'toUserIds' | 'title' | 'time' | 'severity' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	fromUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	messageType?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	toUserIds?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | MessageCollectionSegmentKeySpecifier)[];
export type MessageCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_' | 'authenticate' | 'federateAuthenticate' | 'cancelAuthentication' | 'createTenant' | 'editTenant' | 'toggleTenantAvailability' | 'checkTenant' | 'changePassword' | 'register' | 'assignRoles' | 'assignOrgs' | 'editUser' | 'createUser' | 'resetUserPassword' | 'createOrg' | 'fixUserOrg' | 'createRole' | 'setRoleDefault' | 'markMessagesRead' | 'deleteMessageDistributions' | 'sendMessage' | 'createMessage' | 'editMessage' | 'createBlobObject' | 'deleteBlobObject' | 'editSetting' | 'authorize' | 'generateCaptcha' | 'validateCaptcha' | 'submitx_Aggregate_x' | 'auditx_Aggregate_x' | 'unsubmitx_Aggregate_x' | 'unauditx_Aggregate_x' | 'createx_Aggregate_x' | 'editx_Aggregate_x' | 'deletex_Aggregate_x' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticate?: FieldPolicy<any> | FieldReadFunction<any>,
	federateAuthenticate?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelAuthentication?: FieldPolicy<any> | FieldReadFunction<any>,
	createTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	editTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	toggleTenantAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	checkTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	assignRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	assignOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	editUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	resetUserPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	fixUserOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	setRoleDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	markMessagesRead?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMessageDistributions?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	editMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createBlobObject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBlobObject?: FieldPolicy<any> | FieldReadFunction<any>,
	editSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	authorize?: FieldPolicy<any> | FieldReadFunction<any>,
	generateCaptcha?: FieldPolicy<any> | FieldReadFunction<any>,
	validateCaptcha?: FieldPolicy<any> | FieldReadFunction<any>,
	submitx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	auditx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubmitx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	unauditx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	createx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	editx_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>,
	deletex_Aggregate_x?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgKeySpecifier = ('allParentOrgCodes' | 'allParentOrgs' | 'allSubOrgCodes' | 'allSubOrgs' | 'directSubOrgCodes' | 'directSubOrgs' | 'parentOrg' | 'parentOrgCode' | 'code' | 'name' | 'orgType' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | OrgKeySpecifier)[];
export type OrgFieldPolicy = {
	allParentOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allParentOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	allSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	directSubOrgs?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgCacheItemKeySpecifier = ('orgType' | 'code' | 'name' | 'parentOrgCode' | OrgCacheItemKeySpecifier)[];
export type OrgCacheItemFieldPolicy = {
	orgType?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentOrgCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | OrgCollectionSegmentKeySpecifier)[];
export type OrgCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_' | 'tenants' | 'users' | 'currentUser' | 'orgs' | 'roles' | 'messages' | 'unreadMessages' | 'blobObjects' | 'settings' | 'initSettings' | 'myPermissions' | '_hint' | 'orgsCache' | 'x_aggregate_xs' | 'x_aggregate_xById' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	tenants?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	blobObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	initSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	myPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	_hint?: FieldPolicy<any> | FieldReadFunction<any>,
	orgsCache?: FieldPolicy<any> | FieldReadFunction<any>,
	x_aggregate_xs?: FieldPolicy<any> | FieldReadFunction<any>,
	x_aggregate_xById?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('name' | 'code' | 'users' | 'permissions' | 'tenantCode' | 'isDefault' | 'isStatic' | 'isEnabled' | 'modifiedOn' | 'id' | 'createdOn' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isStatic?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | RoleCollectionSegmentKeySpecifier)[];
export type RoleCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingKeySpecifier = ('id' | 'createdOn' | 'modifiedOn' | 'scope' | 'validScopes' | 'scopedKey' | 'name' | 'value' | SettingKeySpecifier)[];
export type SettingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	validScopes?: FieldPolicy<any> | FieldReadFunction<any>,
	scopedKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SettingCollectionSegmentKeySpecifier)[];
export type SettingCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('_' | 'onFrontendCall' | 'onBroadcast' | 'echo' | 'onCacheDataChange' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	onFrontendCall?: FieldPolicy<any> | FieldReadFunction<any>,
	onBroadcast?: FieldPolicy<any> | FieldReadFunction<any>,
	echo?: FieldPolicy<any> | FieldReadFunction<any>,
	onCacheDataChange?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantKeySpecifier = ('id' | 'createdOn' | 'modifiedOn' | 'code' | 'name' | 'isEnabled' | 'externalInfo' | TenantKeySpecifier)[];
export type TenantFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	externalInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('phoneNumber' | 'isEnable' | 'username' | 'nickname' | 'email' | 'password' | 'claims' | 'orgs' | 'orgCodes' | 'permissions' | 'roleIds' | 'avatarFile' | 'avatarFileId' | 'roles' | 'roleNames' | 'loginProvider' | 'openId' | 'tenantCode' | 'modifiedOn' | 'id' | 'createdOn' | 'checkPassword' | 'setPassword' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnable?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	claims?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	roleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarFile?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarFileId?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	roleNames?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	openId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantCode?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>,
	checkPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	setPassword?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserClaimKeySpecifier = ('claimType' | 'claimValue' | UserClaimKeySpecifier)[];
export type UserClaimFieldPolicy = {
	claimType?: FieldPolicy<any> | FieldReadFunction<any>,
	claimValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | UserCollectionSegmentKeySpecifier)[];
export type UserCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTokenKeySpecifier = ('token' | 'user' | 'loginProvider' | 'userId' | 'name' | UserTokenKeySpecifier)[];
export type UserTokenFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	loginProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type x_Aggregate_xKeySpecifier = ('generateNewId' | 'delete' | 'name' | 'auditStatus' | 'auditRemark' | 'submittable' | 'modifiedOn' | 'id' | 'createdOn' | x_Aggregate_xKeySpecifier)[];
export type x_Aggregate_xFieldPolicy = {
	generateNewId?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	auditStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	auditRemark?: FieldPolicy<any> | FieldReadFunction<any>,
	submittable?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type x_Aggregate_xCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | x_Aggregate_xCollectionSegmentKeySpecifier)[];
export type x_Aggregate_xCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	BlobObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlobObjectKeySpecifier | (() => undefined | BlobObjectKeySpecifier),
		fields?: BlobObjectFieldPolicy,
	},
	BlobObjectCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlobObjectCollectionSegmentKeySpecifier | (() => undefined | BlobObjectCollectionSegmentKeySpecifier),
		fields?: BlobObjectCollectionSegmentFieldPolicy,
	},
	Captcha?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CaptchaKeySpecifier | (() => undefined | CaptchaKeySpecifier),
		fields?: CaptchaFieldPolicy,
	},
	CollectionSegmentInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionSegmentInfoKeySpecifier | (() => undefined | CollectionSegmentInfoKeySpecifier),
		fields?: CollectionSegmentInfoFieldPolicy,
	},
	DeleteResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteResultKeySpecifier | (() => undefined | DeleteResultKeySpecifier),
		fields?: DeleteResultFieldPolicy,
	},
	FrontendCall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FrontendCallKeySpecifier | (() => undefined | FrontendCallKeySpecifier),
		fields?: FrontendCallFieldPolicy,
	},
	HintType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HintTypeKeySpecifier | (() => undefined | HintTypeKeySpecifier),
		fields?: HintTypeFieldPolicy,
	},
	IAuditEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IAuditEntityKeySpecifier | (() => undefined | IAuditEntityKeySpecifier),
		fields?: IAuditEntityFieldPolicy,
	},
	IBlobObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IBlobObjectKeySpecifier | (() => undefined | IBlobObjectKeySpecifier),
		fields?: IBlobObjectFieldPolicy,
	},
	IEntityBase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IEntityBaseKeySpecifier | (() => undefined | IEntityBaseKeySpecifier),
		fields?: IEntityBaseFieldPolicy,
	},
	IFrontendCall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IFrontendCallKeySpecifier | (() => undefined | IFrontendCallKeySpecifier),
		fields?: IFrontendCallFieldPolicy,
	},
	IMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IMessageKeySpecifier | (() => undefined | IMessageKeySpecifier),
		fields?: IMessageFieldPolicy,
	},
	IMessageContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IMessageContentKeySpecifier | (() => undefined | IMessageContentKeySpecifier),
		fields?: IMessageContentFieldPolicy,
	},
	IOrg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IOrgKeySpecifier | (() => undefined | IOrgKeySpecifier),
		fields?: IOrgFieldPolicy,
	},
	IPagedList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IPagedListKeySpecifier | (() => undefined | IPagedListKeySpecifier),
		fields?: IPagedListFieldPolicy,
	},
	IRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IRoleKeySpecifier | (() => undefined | IRoleKeySpecifier),
		fields?: IRoleFieldPolicy,
	},
	ISetting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ISettingKeySpecifier | (() => undefined | ISettingKeySpecifier),
		fields?: ISettingFieldPolicy,
	},
	ITenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ITenantKeySpecifier | (() => undefined | ITenantKeySpecifier),
		fields?: ITenantFieldPolicy,
	},
	ITenantCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ITenantCollectionSegmentKeySpecifier | (() => undefined | ITenantCollectionSegmentKeySpecifier),
		fields?: ITenantCollectionSegmentFieldPolicy,
	},
	IUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUserKeySpecifier | (() => undefined | IUserKeySpecifier),
		fields?: IUserFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	MessageCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageCollectionSegmentKeySpecifier | (() => undefined | MessageCollectionSegmentKeySpecifier),
		fields?: MessageCollectionSegmentFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Org?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgKeySpecifier | (() => undefined | OrgKeySpecifier),
		fields?: OrgFieldPolicy,
	},
	OrgCacheItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgCacheItemKeySpecifier | (() => undefined | OrgCacheItemKeySpecifier),
		fields?: OrgCacheItemFieldPolicy,
	},
	OrgCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgCollectionSegmentKeySpecifier | (() => undefined | OrgCollectionSegmentKeySpecifier),
		fields?: OrgCollectionSegmentFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	RoleCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleCollectionSegmentKeySpecifier | (() => undefined | RoleCollectionSegmentKeySpecifier),
		fields?: RoleCollectionSegmentFieldPolicy,
	},
	Setting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingKeySpecifier | (() => undefined | SettingKeySpecifier),
		fields?: SettingFieldPolicy,
	},
	SettingCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingCollectionSegmentKeySpecifier | (() => undefined | SettingCollectionSegmentKeySpecifier),
		fields?: SettingCollectionSegmentFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantKeySpecifier | (() => undefined | TenantKeySpecifier),
		fields?: TenantFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserClaim?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserClaimKeySpecifier | (() => undefined | UserClaimKeySpecifier),
		fields?: UserClaimFieldPolicy,
	},
	UserCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCollectionSegmentKeySpecifier | (() => undefined | UserCollectionSegmentKeySpecifier),
		fields?: UserCollectionSegmentFieldPolicy,
	},
	UserToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTokenKeySpecifier | (() => undefined | UserTokenKeySpecifier),
		fields?: UserTokenFieldPolicy,
	},
	x_Aggregate_x?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | x_Aggregate_xKeySpecifier | (() => undefined | x_Aggregate_xKeySpecifier),
		fields?: x_Aggregate_xFieldPolicy,
	},
	x_Aggregate_xCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | x_Aggregate_xCollectionSegmentKeySpecifier | (() => undefined | x_Aggregate_xCollectionSegmentKeySpecifier),
		fields?: x_Aggregate_xCollectionSegmentFieldPolicy,
	}
};