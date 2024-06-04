import { Apply, NoID } from '../../../../cast'
import { IsOf } from '../../../../guards'

interface FeedOptions {
  color: string;
  prefilter: string;
  moduleID: string;
}

export type FeedInput = Partial<Feed> | Feed

const defOptions = {
  moduleID: NoID,
  color: '#0B344E',
  prefilter: '',
}

/**
 * Feed class represents an event feed for the given calendar
 */
export default class Feed {
  public resource = 'compose:record'
  public titleField = ''
  public geometryField = ''
  public displayMarker = true
  public displayPolygon = false
  public options: FeedOptions = { ...defOptions }

  constructor (i?: FeedInput) {
    this.apply(i)
  }

  apply (i?: FeedInput): void {
    if (!i) return

    if (IsOf<Feed>(i, 'resource')) {
      Apply(this, i, String, 'resource', 'titleField', 'geometryField')
      Apply(this, i, Boolean, 'displayMarker', 'displayPolygon')

      if (i.options) {
        this.options = { ...this.options, ...i.options }
      }
    }
  }

  isValid (): boolean {
    return this.options.moduleID !== NoID && !!this.geometryField
  }
}
