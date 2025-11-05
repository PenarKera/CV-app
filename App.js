import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  Switch,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const isDark = darkMode;

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 600;

  return (
    <ScrollView
      style={[styles.page, isDark ? styles.pageDark : styles.pageLight]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={[
          styles.container,
          { flexDirection: isSmallScreen ? "column" : "row" },
          isDark ? styles.containerDark : styles.containerLight,
        ]}
      >
        {/* LEFT COLUMN */}
        <LinearGradient
          colors={isDark ? ["#0a1b2a", "#0f1720"] : ["#a0d8ff", "#60b0ff"]}
          style={[styles.leftColumn, isSmallScreen && { width: "100%" }]}
        >
          <Image
            source={require("./images/foto1.jpg")}
            style={styles.image}
          />
          <Text style={[styles.name, isDark && styles.nameDark]}>
            Pënar Kera
          </Text>

          {/* Contact */}
          <View style={[styles.infoSection, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
              Contact
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              📍 Deshmoret e Kombit, Vushtrri
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              📧 penar.kera@umib.net
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              📞 049 830 393
            </Text>
          </View>

          {/* Skills */}
          <View style={[styles.infoSection, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
              Skills
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              💻 Java, Python, JavaScript, C#, C++
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🌐 React.js, Node.js, Express
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              📱 React Native, Flutter (basic)
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🗄️ MySQL, MongoDB, Firebase
            </Text>
          </View>

          {/* Languages */}
          <View style={[styles.infoSection, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
              Languages
            </Text>
            <View style={styles.languageRow}>
              <Text style={styles.flagEmoji}>🇦🇱</Text>
              <Text style={[styles.text, isDark && styles.textDark]}>
                Albanian – Native
              </Text>
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.flagEmoji}>🇹🇷</Text>
              <Text style={[styles.text, isDark && styles.textDark]}>
                Turkish – Very Good
              </Text>
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.flagEmoji}>🇬🇧</Text>
              <Text style={[styles.text, isDark && styles.textDark]}>
                English – Intermediate
              </Text>
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.flagEmoji}>🇫🇷</Text>
              <Text style={[styles.text, isDark && styles.textDark]}>
                French – Basic
              </Text>
            </View>
          </View>

          {/* Certifications */}
          <View style={[styles.infoSection, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
              Certifications
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🎓 Prishtina Rea – Web Dev & Cloud
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🎓 ICT – Web Development
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🎓 Speex – Backend Development
            </Text>
          </View>
        </LinearGradient>

        {/* RIGHT COLUMN */}
        <View
          style={[styles.rightColumn, isDark && styles.rightColumnDark, isSmallScreen && { width: "100%" }]}
        >
          <View style={[styles.header, isDark && styles.headerDark]}>
            <Text style={[styles.mainName, isDark && styles.mainNameDark]}>
              Pënar Kera
            </Text>
            <Text style={[styles.role, isDark && styles.roleDark]}>
              3rd Year Computer Science Student
            </Text>
          </View>

          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, isDark && styles.textDark]}>
              🌙 Dark Mode
            </Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              thumbColor={darkMode ? "#58a6ff" : "#fff"}
              trackColor={{ true: "#2563eb", false: "#9ca3af" }}
            />
          </View>

          {/* About Me */}
          <View style={[styles.section, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.title, isDark && styles.titleDark]}>About Me</Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              I am a curious and creative Computer Science student at “Isa Boletini” University.
              I enjoy exploring modern technologies, building full-stack apps, and solving real-world problems with smart digital solutions.
            </Text>
          </View>

          {/* Education */}
          <View style={[styles.section, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.title, isDark && styles.titleDark]}>Education</Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              🎓 <Text style={styles.bold}>Isa Boletini University</Text>, Mitrovicë {"\n"}
              Computer Science & Engineering {"\n\n"}
              🏫 <Text style={styles.bold}>Eqrem Qabej High School</Text> {"\n"}Social Sciences
            </Text>
          </View>

          {/* Experience */}
          <View style={[styles.section, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.title, isDark && styles.titleDark]}>Experience</Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              • Full-stack university projects (React + Node)
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              • Mobile UI & API integration
            </Text>
            <Text style={[styles.text, isDark && styles.textDark]}>
              • Exploring AI & Cloud backend techniques
            </Text>
          </View>

          {/* Contact Links */}
          <View style={[styles.section, isDark && styles.infoSectionDark, styles.cardShadow]}>
            <Text style={[styles.title, isDark && styles.titleDark]}>Contact Links</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://linkedin.com")}>
              <Text style={[styles.link, isDark && styles.linkDark]}>🔗 LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com")}>
              <Text style={[styles.link, isDark && styles.linkDark]}>🐙 GitHub</Text>
            </TouchableOpacity>
          </View>

          {/* Download CV */}
          <TouchableOpacity
            style={[styles.button, isDark && styles.buttonDark]}
            onPress={() => Linking.openURL("https://example.com/penar-cv.pdf")}
          >
            <Text style={styles.buttonText}>📄 Download CV</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style={isDark ? "light" : "dark"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  pageLight: { backgroundColor: "#e6f6ff" },
  pageDark: { backgroundColor: "#0b1116" },

  container: { flexDirection: "row", flexWrap: "wrap", margin: 16, borderRadius: 12, overflow: "hidden", elevation: 8 },
  containerLight: { backgroundColor: "#fff" },
  containerDark: { backgroundColor: "#0f1418" },

  leftColumn: { width: "38%", minWidth: 200, alignItems: "center", paddingVertical: 26, paddingHorizontal: 12 },
  rightColumn: { width: "62%", minWidth: 250, padding: 22 },
  rightColumnDark: { backgroundColor: "transparent" },

  image: { width: 140, height: 140, borderRadius: 100, marginBottom: 12, borderWidth: 3, borderColor: "#fff" },

  name: { fontSize: 22, fontWeight: "700", color: "#01579b", marginBottom: 12 },
  nameDark: { color: "#58a6ff" },

  infoSection: { width: "100%", marginBottom: 12, backgroundColor: "rgba(255,255,255,0.45)", borderRadius: 10, padding: 10 },
  infoSectionDark: { backgroundColor: "rgba(255,255,255,0.03)", borderColor: "#17202a", borderWidth: 1 },

  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#01579b", marginBottom: 6 },
  sectionTitleDark: { color: "#58a6ff" },

  text: { fontSize: 14, color: "#263238", marginVertical: 2 },
  textDark: { color: "#c9d1d9" },

  header: { borderBottomWidth: 2, borderBottomColor: "#97d0ff", marginBottom: 14, paddingBottom: 6 },
  headerDark: { borderBottomColor: "#173247" },

  mainName: { fontSize: 26, fontWeight: "800", color: "#01579b" },
  mainNameDark: { color: "#cfe8ff" },

  role: { fontSize: 15, color: "#0277bd" },
  roleDark: { color: "#9ccaff" },

  section: { marginBottom: 14 },
  title: { fontSize: 17, fontWeight: "700", color: "#01579b", marginBottom: 6 },
  titleDark: { color: "#cfe8ff" },

  languageRow: { flexDirection: "row", alignItems: "center", marginVertical: 2, gap: 6 },
  flagEmoji: { fontSize: 18 },

  link: { color: "#0277bd", textDecorationLine: "underline", marginVertical: 4 },
  linkDark: { color: "#9ccaff" },

  bold: { fontWeight: "700" },

  button: { marginTop: 10, backgroundColor: "#0277bd", paddingVertical: 12, borderRadius: 24, alignItems: "center", width: "60%", alignSelf: "center" },
  buttonDark: { backgroundColor: "#1f6feb" },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },

  switchRow: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 12, gap: 8 },
  switchLabel: { fontSize: 14, color: "#253038" },
});
