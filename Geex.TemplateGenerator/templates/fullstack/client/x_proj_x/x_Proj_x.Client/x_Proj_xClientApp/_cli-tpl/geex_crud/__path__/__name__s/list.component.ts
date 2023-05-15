import { ChangeDetectorRef, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { STChange, STColumn, STComponent } from '@delon/abc/st';
import { SFComponent, SFSchema, SFValueChange } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { Apollo } from 'apollo-angular';
import { Observable, pipe } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BusinessComponentBase } from '../../../shared/components/business.component.base';
import html from 'html-template-tag';
import {
  <%= classify(name) %>BriefFragment,
  <%= classify(name) %>sGql,
  <%= classify(name) %>sQuery,
  <%= classify(name) %>sQueryVariables,
} from '../../../shared/graphql/.generated/type';

@Component({
  selector: 'app-<%= module %>-<%= name %>s',
  templateUrl: './list.component.html',
})
export class <%= classify(name) %>ListComponent extends BusinessComponentBase {
  $init: Observable<any>;
  data: <%= classify(name) %>BriefFragment[];
  selectedData: <%= classify(name) %>BriefFragment[];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '标题',
      },
    },
  };
  @ViewChild('sf')
  readonly sf!: SFComponent;
  @ViewChild('st')
  readonly st!: STComponent;
  columns: STColumn<<%= classify(name) %>BriefFragment>[] = [
    {
      title: '',
      width: 30,
      type: 'checkbox',
      index: 'checked',
      fixed: 'left',
      className: ['text-center'],
    },
    // { title: 'Id', index: 'id' },
    // {
    //   title: '名称',
    //   index: 'name',
    //   type: 'link',
    //   click: (item: <%= classify(name) %>BriefFragment) => this.router.navigate(['view', item.id], { relativeTo: this.route }),
    // },
    // {
    //   title: '重要性',
    //   index: 'severity',
    //   type: 'badge',
    //   badge: {
    //     INFO: {
    //       text: '信息',
    //       color: 'default',
    //     },
    //   },
    // },
    // { title: '消息类型', index: '<%= name %>Type' },
    // { title: '发送人', index: 'fromUserId' },
    // { title: '发送时间', index: 'time', type: 'date' },
    {
      title: '操作',
      buttons: [
        {
          icon: 'edit',
          text: '编辑',
          click: (item: <%= classify(name) %>BriefFragment) => this.router.navigate(['edit', item.id], { relativeTo: this.route }),
        },
      ],
    },
  ];

  constructor(injector: Injector) {
    super(injector);

    let $res = this.$routeChange.pipe(
      switchMap((param) => {
        return this.apollo.query<<%= classify(name) %>sQuery, <%= classify(name) %>sQueryVariables>({
          query: <%= classify(name) %>sGql,
          variables: {
              skip: Number(((param.pi ?? 1) - 1) * (this.st?.ps ?? 10)),
              take: Number(param.ps ?? this.st?.ps ?? 10),
              where: {
                // name: {
                //   contains: param.name ?? '',
                // },
              },
              includeDetail: false,
            },
        });
      }),
    );

    this.$init = $res.pipe(
      map((x) => {
        this.st.total = x.data.<%= name %>s.totalCount;
        this.loading = x.loading;
        this.data = x.data.<%= name %>s.items;
        this.selectedData = [];
      }),
    );
  }

  stChange(args: STChange) {
    if (args.type == 'pi' || args.type == 'ps') {
      this.router.navigate([], { queryParams: { pi: args.pi, ps: args.ps, /* name: this.sf.value.name */ } });
    }

    if (args.type == 'checkbox') {
      this.selectedData = args.checkbox;
    }
  }

  selectChange(data: <%= classify(name) %>BriefFragment[]): void {
    console.log(data);
  }

  batchAudit(auditPassOrCancel: boolean) { }

  add(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}