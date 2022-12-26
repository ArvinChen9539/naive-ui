'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.unconfigurableStyle = exports.mountSvgDefs = void 0
const seemly_1 = require('seemly')
const naive_ui_1 = require('naive-ui')
function mountSvgDefs() {
  if (document.getElementById('naive-ui/tusimple/svg-defs')) return
  const svgDefs = `<defs>
    <linearGradient id="progress-info">
      <stop offset="0%" stop-color="#80c6ff" />
      <stop offset="100%" stop-color="#335fff" />
    </linearGradient>
    <linearGradient id="progress-success">
      <stop offset="0%" stop-color="#AFF25E" />
      <stop offset="100%" stop-color="#4FB233" />
    </linearGradient>
    <linearGradient id="progress-warning">
      <stop offset="0%" stop-color="#F2E93D" />
      <stop offset="100%" stop-color="#FFAC26" />
    </linearGradient>
    <linearGradient id="progress-error">
      <stop offset="0%" stop-color="#FF66BA" />
      <stop offset="100%" stop-color="#D92149" />
    </linearGradient>
  </defs>`
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svgEl.innerHTML = svgDefs
  svgEl.id = 'naive-ui/tusimple/svg-defs'
  document.body.appendChild(svgEl)
}
exports.mountSvgDefs = mountSvgDefs
exports.unconfigurableStyle = (0, naive_ui_1.c)([
  (0, naive_ui_1.cB)(
    'base-select-menu',
    {
      overflow: 'hidden'
    },
    [
      (0, naive_ui_1.cB)('base-select-menu-option-wrapper', {
        paddingTop: '4px!important',
        paddingBottom: '4px!important'
      }),
      (0, naive_ui_1.cB)('base-select-option', [
        (0, naive_ui_1.cM)(
          'selected',
          {
            backgroundColor: 'transparent'
          },
          [
            (0, naive_ui_1.c)('&:hover', {
              backgroundColor: 'var(--n-option-color-pending)'
            })
          ]
        )
      ])
    ]
  ),
  (0, naive_ui_1.cB)('base-selection', [
    (0, naive_ui_1.cB)('base-suffix', {
      transition: 'all .3s'
    }),
    (0, naive_ui_1.cM)('active', [
      (0, naive_ui_1.cB)(
        'base-suffix',
        {
          transform: 'translateY(-50%) rotate(180deg)'
        },
        [
          (0, naive_ui_1.cB)('base-suffix__arrow', {
            color: '#4FB233'
          })
        ]
      )
    ])
  ]),
  (0, naive_ui_1.cB)('button', [
    (0, naive_ui_1.cNotM)('disabled', [
      (0, naive_ui_1.c)('&:hover', {
        color: 'var(--n-text-color)'
      })
    ])
  ]),
  (0, naive_ui_1.cB)('cascader-menu', {
    padding: '4px 0'
  }),
  (0, naive_ui_1.cB)('dropdown-menu', {
    overflow: 'hidden'
  }),
  (0, naive_ui_1.cB)('date-panel', [
    (0, naive_ui_1.cB)('date-panel-dates', [
      (0, naive_ui_1.cB)('date-panel-date', [
        (0, naive_ui_1.cM)(
          'current',
          {
            color: '#4FB233'
          },
          [
            (0, naive_ui_1.cM)('disabled', {
              color: 'rgba(79, 178, 51, .5)'
            }),
            (0, naive_ui_1.cB)('date-panel-date__sup', {
              display: 'none'
            })
          ]
        ),
        (0, naive_ui_1.cM)('start, end', [
          (0, naive_ui_1.c)('&:nth-child(7n + 1)::before', {
            left: '0'
          }),
          (0, naive_ui_1.c)('&:nth-child(7n + 7)::before', {
            right: '0'
          })
        ]),
        (0, naive_ui_1.cM)('covered, start, end', [
          (0, naive_ui_1.cNotM)('excluded', [
            (0, naive_ui_1.c)('&:nth-child(7n + 1)::before', {
              left: '0'
            }),
            (0, naive_ui_1.c)('&:nth-child(7n + 7)::before', {
              right: '0'
            })
          ])
        ])
      ])
    ])
  ]),
  (0, naive_ui_1.cB)('data-table', [
    (0, naive_ui_1.cB)('data-table-tr', [
      (0, naive_ui_1.cNotM)('summary', [
        (0, naive_ui_1.c)('&:hover', {
          backgroundColor: 'transparent'
        })
      ])
    ]),
    (0, naive_ui_1.cB)('data-table-td', [
      (0, naive_ui_1.c)('&.n-data-table-td--hover', {
        backgroundColor: 'transparent'
      })
    ]),
    (0, naive_ui_1.cM)('bottom-bordered', [
      (0, naive_ui_1.cB)('data-table-wrapper', [
        (0, naive_ui_1.cB)('data-table-base-table', [
          (0, naive_ui_1.cB)('data-table-base-table-body', {
            borderRadius: 'var(--n-border-radius);'
          })
        ])
      ])
    ]),
    (0, naive_ui_1.cB)('data-table-empty', {
      backgroundColor: '#1E1E1E'
    })
  ]),
  (0, naive_ui_1.cB)('dialog', [
    (0, naive_ui_1.cE)('title', {
      marginTop: '20px',
      lineHeight: '33px'
    }),
    (0, naive_ui_1.cE)('content', {
      lineHeight: '22px'
    })
  ]),
  (0, naive_ui_1.cB)('dynamic-tags', [
    (0, naive_ui_1.cB)('button', {
      height: '24px'
    }),
    (0, naive_ui_1.cB)('input', [
      (0, naive_ui_1.cM)('autosize', {
        minWidth: '68px'
      })
    ])
  ]),
  (0, naive_ui_1.cB)(
    'table',
    {
      borderRadius: 'var(--n-border-radius)'
    },
    [
      (0, naive_ui_1.c)('th', {
        borderRight: '1px solid transparent'
      })
    ]
  ),
  (0, naive_ui_1.cB)('tabs', [
    (0, naive_ui_1.cB)('tabs-bar', {
      height: '4px !important',
      borderRadius: '100px !important',
      transform: 'scaleX(0.395)'
    })
  ]),
  (0, naive_ui_1.cB)('input', [
    (0, naive_ui_1.cM)('textarea', [
      (0, naive_ui_1.cM)('resizable', [
        (0, naive_ui_1.cB)('input-wrapper', {
          margin: '0 5px 5px 0',
          paddingRight: '7px'
        })
      ])
    ])
  ]),
  (0, naive_ui_1.cB)('tag', [
    (0, naive_ui_1.cE)(
      'close',
      {
        borderRadius: '50%'
      },
      [
        (0, naive_ui_1.c)('&:hover', {
          backgroundColor: (0, seemly_1.changeColor)('#D7DAE0', { alpha: 0.5 })
        }),
        (0, naive_ui_1.c)('&:hover', {
          backgroundColor: (0, seemly_1.changeColor)('#D7DAE0', { alpha: 0.25 })
        })
      ]
    )
  ]),
  (0, naive_ui_1.cB)('time-picker-panel', [
    (0, naive_ui_1.cB)('time-picker-col', [
      (0, naive_ui_1.cE)('item', [
        (0, naive_ui_1.cM)('active', [
          (0, naive_ui_1.c)('&::before', {
            backgroundColor: 'transparent'
          })
        ]),
        (0, naive_ui_1.c)('&:before', {
          right: '0'
        })
      ])
    ]),
    (0, naive_ui_1.cB)(
      'time-picker-actions',
      {
        width: '100%',
        display: 'inline-block',
        textAlign: 'center'
      },
      [
        (0, naive_ui_1.cB)('button', {
          margin: '0 6px'
        })
      ]
    )
  ]),
  (0, naive_ui_1.cB)('tooltip', {
    padding: '8px 16px!important'
  }),
  (0, naive_ui_1.cB)('transfer', [
    (0, naive_ui_1.cB)(
      'transfer-gap',
      {
        width: '56px'
      },
      [
        (0, naive_ui_1.cB)(
          'button',
          {
            width: '32px',
            height: '32px',
            padding: '0'
          },
          [
            (0, naive_ui_1.c)('&:hover', [
              (0, naive_ui_1.cNotM)('disabled', [
                (0, naive_ui_1.cE)('icon', {
                  color: 'var(--n-text-color-hover)'
                })
              ])
            ]),
            (0, naive_ui_1.cE)('border', {
              border: '1px solid #848484'
            }),
            (0, naive_ui_1.cE)('icon', {
              color: '#848484'
            }),
            (0, naive_ui_1.cM)(
              'disabled',
              {
                backgroundColor: 'transparent'
              },
              [
                (0, naive_ui_1.cE)('border', {
                  border: '1px solid #5B5B5B'
                }),
                (0, naive_ui_1.cE)('icon', {
                  color: '#5B5B5B'
                })
              ]
            )
          ]
        )
      ]
    ),
    (0, naive_ui_1.cB)('transfer-list', [
      (0, naive_ui_1.cB)('transfer-list-header', [
        (0, naive_ui_1.cB)('transfer-list-header__checkbox', {
          paddingLeft: '12px',
          paddingRight: '13px'
        }),
        (0, naive_ui_1.cB)('transfer-list-header__extra', {
          marginRight: '12px'
        })
      ]),
      (0, naive_ui_1.cB)('transfer-list-body', [
        (0, naive_ui_1.cB)('transfer-list-flex-container', [
          (0, naive_ui_1.cB)('transfer-list-content', [
            (0, naive_ui_1.cB)('transfer-list-item', [
              (0, naive_ui_1.cB)('transfer-list-item__checkbox', {
                paddingLeft: '12px',
                paddingRight: '13px'
              })
            ])
          ])
        ])
      ])
    ])
  ]),
  (0, naive_ui_1.cB)('tree', [
    (0, naive_ui_1.cB)('tree-node-wrapper', {
      margin: '0 -4px'
    })
  ]),
  (0, naive_ui_1.cB)('message', [
    (0, naive_ui_1.cE)('close', [
      (0, naive_ui_1.c)('&:hover', {
        backgroundColor: (0, seemly_1.changeColor)('#D7DAE0', { alpha: 0.5 })
      }),
      (0, naive_ui_1.c)('&:active', {
        backgroundColor: (0, seemly_1.changeColor)('#D7DAE0', { alpha: 0.25 })
      })
    ])
  ]),
  (0, naive_ui_1.cB)('progress', [
    (0, naive_ui_1.cB)('progress-graph', [
      (0, naive_ui_1.cB)('progress-graph-line', [
        (0, naive_ui_1.cB)('progress-graph-line-rail', [
          (0, naive_ui_1.cB)('progress-graph-line-fill', {
            background: 'linear-gradient(270deg, #F2E93D 0%, #FFAC26 100%)'
          })
        ])
      ]),
      (0, naive_ui_1.cB)('progress-graph-circle', [
        (0, naive_ui_1.cB)('progress-graph-circle-fill', {
          stroke: 'url(#progress-warning)'
        })
      ])
    ]),
    (0, naive_ui_1.cM)('info', [
      (0, naive_ui_1.cB)('progress-graph-line', [
        (0, naive_ui_1.cB)('progress-graph-line-rail', [
          (0, naive_ui_1.cB)('progress-graph-line-fill', {
            background: 'linear-gradient(270deg, #F2E93D 0%, #FFAC26 100%)'
          })
        ])
      ]),
      (0, naive_ui_1.cM)('circle', [
        (0, naive_ui_1.cB)('progress-graph-circle-fill', {
          stroke: 'url(#progress-warning)'
        })
      ])
    ]),
    (0, naive_ui_1.cM)('success', [
      (0, naive_ui_1.cB)('progress-graph-line', [
        (0, naive_ui_1.cB)('progress-graph-line-rail', [
          (0, naive_ui_1.cB)('progress-graph-line-fill', {
            background: 'linear-gradient(270deg, #AFF25E 0%, #4FB233 100%)'
          })
        ])
      ]),
      (0, naive_ui_1.cM)('circle', [
        (0, naive_ui_1.cB)('progress-graph-circle-fill', {
          stroke: 'url(#progress-success)'
        })
      ])
    ]),
    (0, naive_ui_1.cM)('warning', [
      (0, naive_ui_1.cB)('progress-graph-line', [
        (0, naive_ui_1.cB)('progress-graph-line-rail', [
          (0, naive_ui_1.cB)('progress-graph-line-fill', {
            background: 'linear-gradient(270deg, #FF66BA 0%, #D92149 100%)'
          })
        ])
      ]),
      (0, naive_ui_1.cM)('circle', [
        (0, naive_ui_1.cB)('progress-graph-circle-fill', {
          stroke: 'url(#progress-error)'
        })
      ])
    ]),
    (0, naive_ui_1.cM)('error', [
      (0, naive_ui_1.cB)('progress-graph-line', [
        (0, naive_ui_1.cB)('progress-graph-line-rail', [
          (0, naive_ui_1.cB)('progress-graph-line-fill', {
            background: 'linear-gradient(270deg, #FF66BA 0%, #D92149 100%)'
          })
        ])
      ]),
      (0, naive_ui_1.cM)('circle', [
        (0, naive_ui_1.cB)('progress-graph-circle-fill', {
          stroke: 'url(#progress-error)'
        })
      ])
    ])
  ]),
  (0, naive_ui_1.cB)('switch', [
    (0, naive_ui_1.cM)('active', [
      (0, naive_ui_1.cE)('rail', [
        (0, naive_ui_1.cE)('button', {
          backgroundImage: 'linear-gradient(45deg, #4EB233 0%, #AFF25E 100%)'
        })
      ])
    ]),
    (0, naive_ui_1.cM)('disabled', [
      (0, naive_ui_1.cE)(
        'rail',
        {
          opacity: '1',
          backgroundColor: 'rgba(91, 91, 91, .5)'
        },
        [
          (0, naive_ui_1.cE)('button', {
            backgroundColor: '#5B5B5B',
            backgroundImage: 'unset',
            boxShadow: 'none'
          })
        ]
      ),
      (0, naive_ui_1.cM)('active', [
        (0, naive_ui_1.cE)('rail', [
          (0, naive_ui_1.cE)('button', {
            backgroundColor: '#314A2A'
          })
        ])
      ])
    ]),
    (0, naive_ui_1.cE)(
      'rail',
      {
        overflow: 'visible'
      },
      [
        (0, naive_ui_1.cE)('button', {
          backgroundImage: 'linear-gradient(135deg, #E2E5E9 0%, #999999 100%)'
        })
      ]
    )
  ]),
  (0, naive_ui_1.cB)('upload-file-list', [
    (0, naive_ui_1.cB)('upload-file', [
      (0, naive_ui_1.cB)('upload-file-info', [
        (0, naive_ui_1.cE)('action', [
          (0, naive_ui_1.cB)('button--default-type', {
            color: '#ADADAD'
          })
        ])
      ])
    ])
  ])
])
