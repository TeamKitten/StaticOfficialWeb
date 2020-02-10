<template>
  <section id="aboutus" class="section">
    <h1 class="title">MEMBERS</h1>
    <ul class="members">
      <li v-for="m of members" @click="handleMemberClick(m)" class="member">
        <img
          :src="require(`~/members/avatar_images/${m.attributes.id}.png`)"
          :alt="m.attributes.name"
          class="avatar"
        />
        <p class="role">{{ m.attributes.role }}担当</p>
        <p class="name">{{ m.attributes.name }}</p>
      </li>
    </ul>
    <member-modal v-if="modalOpen" @close="modalOpen = false">
      <template slot="header">
        <h1 class="modalName">
          {{
            excerptModalName(`${activeMember.attributes.name}
            (${activeMember.attributes.role}担当)`)
          }}
        </h1>
      </template>
      <div class="modalContent">
        <div
          :style="{ height: `${resizedHeight}px` }"
          class="coverImageWrapper"
        >
          <img
            v-if="
              checkCoverImageExists(
                `~/members/cover_images/${activeMember.attributes.id}.png`
              )
            "
            :src="
              require(`~/members/cover_images/${activeMember.attributes.id}.png`)
            "
            :style="{ height: `${resizedHeight}px` }"
            :alt="activeMember.attributes.name"
            class="coverImage"
          />
        </div>
        <img
          :src="
            require(`~/members/avatar_images/${activeMember.attributes.id}.png`)
          "
          :alt="activeMember.attributes.name"
          class="avatar modalAvatar"
        />
        <div class="modalTexts">
          <p class="noMargin role">{{ activeMember.attributes.role }}担当</p>
          <p class="name">{{ activeMember.attributes.name }}</p>
          <p class="bio">{{ activeMember.attributes.bio }}</p>
        </div>
      </div>
    </member-modal>
  </section>
</template>

<script>
import path from 'path'
import MemberModal from '~/components/MemberModal'

export default {
  components: {
    MemberModal
  },
  data() {
    return {
      members: [],
      coverImagePaths: [],
      modalOpen: false,
      activeMember: null,
      resizedHeight: 0
    }
  },
  mounted() {
    const membersResolver = require.context('~/members/current', true, /.*\.md/)
    this.members = membersResolver.keys().map((key) => {
      return membersResolver(key)
    })
    const coverImageResolver = require.context(
      '~/members/cover_images',
      true,
      /.*\.(gif|jpg|jpeg|png)/
    )
    this.coverImagePaths = coverImageResolver.keys().map((key) => key)
  },
  methods: {
    handleMemberClick(member) {
      if (process.client) {
        const resized = this.resizeMAR(640, 360, Math.floor(window.innerWidth))
        this.resizedHeight = resized.height
      }
      this.activeMember = member
      this.modalOpen = true
    },
    excerptModalName(name) {
      const maxCount = window.innerWidth / 16
      if (name.length > maxCount) {
        return `${name.substr(0, maxCount)}...`
      }
      return name
    },
    resizeMAR(
      originWidth,
      originHeight,
      resizeNumber,
      resizeMove,
      otherSideNumber
    ) {
      if (!originWidth || !originHeight || !resizeNumber) return false

      if (!resizeMove) resizeMove = 'width'

      let result

      if (
        String(originWidth).match(/^[0-9]+$/) &&
        String(originHeight).match(/^[0-9]+$/) &&
        String(resizeNumber).match(/^[0-9]+$/) &&
        resizeMove.match(/^(width|height)$/)
      ) {
        let newWidth = 0
        let newHeight = 0
        let reResizeMove = ''

        if (resizeMove === 'width') {
          newHeight = (resizeNumber * originHeight) / originWidth
          newWidth = (newHeight * originWidth) / originHeight
          reResizeMove = 'height'
        } else {
          newWidth = (resizeNumber * originWidth) / originHeight
          newHeight = (newWidth * originHeight) / originWidth
          reResizeMove = 'width'
        }

        if (
          otherSideNumber &&
          String(otherSideNumber).match(/^([0-9]+|auto)$/) &&
          newHeight > otherSideNumber
        ) {
          const reResult = this.resizeMAR(
            newWidth,
            newHeight,
            otherSideNumber,
            reResizeMove
          )
          if (reResult) result = reResult
        } else {
          result = {
            width: newWidth,
            height: newHeight
          }
        }
      }
      return result
    },
    checkCoverImageExists(requestedPath) {
      const requestedBasename = path.basename(requestedPath)
      return !!this.coverImagePaths.filter(
        (findPath) => path.basename(findPath) === requestedBasename
      ).length
    }
  }
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
}
.title {
  color: #707070;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;
}
.avatar {
  display: block;
  width: 120px;
  height: 120px;
  border: 4px solid #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.role,
.name {
  text-align: center;
  color: #707070;
}

.role {
  margin-top: 12px;
}

.noMargin {
  margin: 0;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 4px;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.member {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 24px;
  max-width: 240px;
  cursor: pointer;
}

.modalName {
  color: #555;
  font-size: 1.25rem;
  line-height: 32px;
  height: 32px;
}
.modalAvatar {
  width: 180px;
  height: 180px;
  margin-top: -90px;
}
.modalTexts {
  padding: 32px;
  text-align: center;
}
.modalContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.coverImageWrapper {
  width: 100%;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 360px;
}
.coverImage {
  width: auto;
  max-height: 360px;
  overflow: hidden;
}
.bio {
  margin-top: 18px;
  color: #707070;
  font-size: 1.25rem;
}

/* Oppa PC Style */
@media (min-width: 800px) {
  .modalAvatar {
    width: 240px;
    height: 240px;
    margin-top: -120px;
  }
}
</style>
